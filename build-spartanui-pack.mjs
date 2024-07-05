import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname);
const distDir = path.join(rootDir, 'dist', 'spartanui-pack');

console.log(`Root directory: ${rootDir}`);
console.log(`Dist directory: ${distDir}`);

// Check for --clean flag
const cleanBuild = process.argv.includes('--clean');

// Function to check if a library needs rebuilding
function needsRebuild(lib) {
  if (cleanBuild) return true;
  const libDistPath = path.join(distDir, lib);
  return !fs.existsSync(libDistPath) || fs.readdirSync(libDistPath).length === 0;
}

// Build all sub-libraries
const subLibs = fs.readdirSync(path.join(rootDir, 'feature', 'spartanui'));
console.log(`Found ${subLibs.length} sub-libraries`);

subLibs.forEach(lib => {
  if (needsRebuild(lib)) {
    console.log(`Building ${lib}...`);
    execSync(`nx build feature-spartanui-${lib}`, { stdio: 'inherit' });
  } else {
    console.log(`Skipping build for ${lib} (already exists)`);
  }
});

// Clean dist folder if --clean flag is used
if (cleanBuild) {
  console.log('Cleaning dist folder...');
  fs.emptyDirSync(distDir);
}

// Copy built files to dist folder
fs.ensureDirSync(distDir);
subLibs.forEach(lib => {
  const libDistPath = path.join(rootDir, 'dist', 'feature', 'spartanui', lib);
  const libTargetPath = path.join(distDir, lib);
  if (fs.existsSync(libDistPath)) {
    fs.copySync(libDistPath, libTargetPath);
    console.log(`Copied ${lib} to ${libTargetPath}`);
  } else {
    console.log(`Warning: ${libDistPath} does not exist`);
  }
});

// Generate exports object
const exportsObj = {};
subLibs.forEach(lib => {
  const libPath = path.join(distDir, lib);
  if (fs.existsSync(libPath)) {
    console.log(`Checking ${libPath} for .mjs files`);
    const files = fs.readdirSync(libPath);

    // Look for .mjs files in the root and esm2022 directory
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
      console.log(`Found .mjs file for ${lib}: ${mjsPath}`);
      exportsObj[`./${lib}`] = {
        types: `./${lib}/index.d.ts`,
        import: mjsPath,
        default: mjsPath
      };
    } else {
      console.log(`Warning: No .mjs file found for ${lib}`);
    }
  } else {
    console.log(`Warning: ${libPath} does not exist`);
  }
});

console.log('Exports object:', JSON.stringify(exportsObj, null, 2));

// Read, update, and write package.json
const packageJsonPath = path.join(distDir, 'package.json');
let packageJson;
if (fs.existsSync(packageJsonPath)) {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('Existing package.json found');
} else {
  packageJson = {
    name: "@mantistech/spartanui-pack",
    version: "0.0.1",
  };
  console.log('Created new package.json');
}
packageJson.exports = exportsObj;
packageJson.type = 'module';

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Build complete and package.json updated.');
console.log('Final exports object:', JSON.stringify(packageJson.exports, null, 2));
