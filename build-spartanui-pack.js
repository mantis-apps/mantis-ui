// const { execSync } = require('child_process');
// const fs = require('fs-extra');
// const path = require('path');

// const rootDir = path.resolve(__dirname);
// const distDir = path.join(rootDir, 'dist', 'spartanui-pack');

// // Build all sub-libraries
// const subLibs = fs.readdirSync(path.join(rootDir, 'feature', 'spartanui'));
// subLibs.forEach(lib => {
//   console.log(`Building ${lib}...`);
//   execSync(`nx build feature-spartanui-${lib}`, { stdio: 'inherit' });
// });

// // Copy built files to dist folder
// fs.ensureDirSync(distDir);
// subLibs.forEach(lib => {
//   const libDistPath = path.join(rootDir, 'dist', 'feature', 'spartanui', lib);
//   const libTargetPath = path.join(distDir, lib);
//   fs.copySync(libDistPath, libTargetPath);
// });

// // Copy main package.json
// fs.copyFileSync(path.join(rootDir, 'spartanui-pack.json'), path.join(distDir, 'package.json'));

// console.log('Build complete.');

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const rootDir = path.resolve(__dirname);
const distDir = path.join(rootDir, 'dist', 'spartanui-pack');

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
  }
});

// Generate exports object
const exports = {};
subLibs.forEach(lib => {
  const libPath = path.join(distDir, lib);
  if (fs.existsSync(libPath)) {
    const files = fs.readdirSync(libPath);

    const mjsFile = files.find(file => file.endsWith('.mjs'));
    if (mjsFile) {
      const mjsPath = `./${lib}/esm2022/${mjsFile}`;
      exports[`./${lib}`] = {
        types: `./${lib}/index.d.ts`,
        import: mjsPath,
        default: mjsPath
      };
    }
  }
});

// Read, update, and write package.json
const packageJsonPath = path.join(distDir, 'package.json');
let packageJson;
if (fs.existsSync(packageJsonPath)) {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
} else {
  packageJson = {
    name: "@mantistech/spartanui-pack",
    version: "0.0.1",
  };
}
packageJson.exports = exports;
packageJson.type = 'module';

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Build complete and package.json updated.');
