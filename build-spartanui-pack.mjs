import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname);
const distDir = path.join(rootDir, 'dist', 'spartanui-pack');

const cleanBuild = process.argv.includes('--clean');
const verbose = process.argv.includes('--verbose');

const externalPackages = [
  '@spartan-ng/ui-accordion-brain',
  '@spartan-ng/ui-alertdialog-brain',
  '@spartan-ng/ui-avatar-brain',
  '@spartan-ng/ui-checkbox-brain',
  '@spartan-ng/ui-collapsible-brain',
  '@spartan-ng/ui-command-brain',
  '@spartan-ng/ui-core',
  '@spartan-ng/ui-dialog-brain',
  '@spartan-ng/ui-hovercard-brain',
  '@spartan-ng/ui-label-brain',
  '@spartan-ng/ui-menu-brain',
  '@spartan-ng/ui-popover-brain',
  '@spartan-ng/ui-progress-brain',
  '@spartan-ng/ui-radiogroup-brain',
  '@spartan-ng/ui-select-brain',
  '@spartan-ng/ui-separator-brain',
  '@spartan-ng/ui-sheet-brain',
  '@spartan-ng/ui-switch-brain',
  '@spartan-ng/ui-table-brain',
  '@spartan-ng/ui-tabs-brain',
  '@spartan-ng/ui-toggle-brain',
  '@spartan-ng/ui-tooltip-brain',
];

function log(...args) {
  if (verbose) {
    console.log(...args);
  }
}

function logError(...args) {
  console.error(...args);
}

log(`Root directory: ${rootDir}`);
log(`Dist directory: ${distDir}`);

function needsRebuild(lib) {
  if (cleanBuild) return true;
  const libDistPath = path.join(distDir, lib);
  return !fs.existsSync(libDistPath) || fs.readdirSync(libDistPath).length === 0;
}

try {
  const subLibs = fs.readdirSync(path.join(rootDir, 'feature', 'spartanui'));
  log(`Found ${subLibs.length} sub-libraries`);

  subLibs.forEach(lib => {
    if (needsRebuild(lib)) {
      log(`Building ${lib}...`);
      execSync(`nx build feature-spartanui-${lib}`, { stdio: verbose ? 'inherit' : 'ignore' });
    } else {
      log(`Skipping build for ${lib} (already exists)`);
    }
  });

  if (cleanBuild) {
    log('Cleaning dist folder...');
    fs.emptyDirSync(distDir);
  }

  fs.ensureDirSync(distDir);
  subLibs.forEach(lib => {
    const libDistPath = path.join(rootDir, 'dist', 'feature', 'spartanui', lib);
    const libTargetPath = path.join(distDir, lib);
    if (fs.existsSync(libDistPath)) {
      fs.copySync(libDistPath, libTargetPath);
      log(`Copied ${lib} to ${libTargetPath}`);
    } else {
      logError(`Warning: ${libDistPath} does not exist`);
    }
  });

  // function updateImportsInFile(filePath) {
  //   let content = fs.readFileSync(filePath, 'utf8');
  //   const updatedContent = content.replace(
  //     /@spartan-ng\/([^'"\s]+)/g,
  //     '@mantistech/spartanui-pack/$1'
  //   );
  //   if (content !== updatedContent) {
  //     fs.writeFileSync(filePath, updatedContent);
  //     log(`Updated imports in ${filePath}`);
  //   }
  // }

  function updateImportsInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(
      /@spartan-ng\/([^'"\s]+)/g,
      (match) => {
        if (externalPackages.includes(match)) {
          return match; // Don't replace external packages
        }
        return `@mantistech/spartanui-pack/${match.split('/')[1]}`;
      }
    );
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent);
      log(`Updated imports in ${filePath}`);
    }
  }

  function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
      const fullPath = path.join(directory, file);
      if (fs.statSync(fullPath).isDirectory()) {
        processDirectory(fullPath);
      } else if (fullPath.endsWith('.js') || fullPath.endsWith('.d.ts') || fullPath.endsWith('.mjs')) {
        updateImportsInFile(fullPath);
      }
    });
  }

  log('Updating imports...');
  processDirectory(distDir);

  const exportsObj = {};
  subLibs.forEach(lib => {
    const libPath = path.join(distDir, lib);
    if (fs.existsSync(libPath)) {
      log(`Checking ${libPath} for .mjs files`);
      const files = fs.readdirSync(libPath);

      let mjsFile = files.find(file => file.endsWith('.mjs'));
      let mjsPath = '';

      if (mjsFile) {
        mjsPath = `./${lib}/${mjsFile}`;
      } else if (fs.existsSync(path.join(libPath, 'esm2022'))) {
        const esm2022Files = fs.readdirSync(path.join(libPath, 'esm2022'));
        mjsFile = esm2022Files.find(file => file.endsWith('.mjs'));
        if (mjsFile) {
          mjsPath = `./${lib}/esm2022/${mjsFile}`;
        }
      }

      if (mjsPath) {
        log(`Found .mjs file for ${lib}: ${mjsPath}`);
        exportsObj[`./${lib}`] = {
          types: `./${lib}/index.d.ts`,
          import: mjsPath,
          default: mjsPath
        };
      } else {
        logError(`Warning: No .mjs file found for ${lib}`);
      }
    } else {
      logError(`Warning: ${libPath} does not exist`);
    }
  });

  log('Exports object:', JSON.stringify(exportsObj, null, 2));

  const packageJsonPath = path.join(distDir, 'package.json');
  let packageJson;
  if (fs.existsSync(packageJsonPath)) {
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    log('Existing package.json found');
  } else {
    packageJson = {
      name: "@mantistech/spartanui-pack",
      version: "0.0.1",
    };
    log('Created new package.json');
  }
  packageJson.exports = exportsObj;
  packageJson.type = 'module';

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log('Build complete and package.json updated.');
  log('Final exports object:', JSON.stringify(packageJson.exports, null, 2));
} catch (error) {
  logError('An error occurred during the build process:');
  logError(error);
  process.exit(1);
}
