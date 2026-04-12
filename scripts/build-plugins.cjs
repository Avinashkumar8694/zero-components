/**
 * Custom Build System for Zero Plugins
 * Bundles individual component packages for JS URL injection.
 * Usage: node scripts/build-plugins.js [--all] [--package=NAME]
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const buildAll = args.includes('--all');
const packageArg = args.find(a => a.startsWith('--package='))?.split('=')[1];

const PACKAGES_DIR = path.join(__dirname, '../packages');
const DIST_DIR = path.join(__dirname, '../server/plugins');

if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
}

function buildPackage(packageName) {
    const pkgPath = path.join(PACKAGES_DIR, packageName);
    if (!fs.existsSync(pkgPath)) {
        console.error(`Package not found: ${packageName}`);
        return;
    }

    console.log(`Building plugin: ${packageName} (Shimmed)...`);
    
    try {
        const entryPoint = fs.existsSync(path.join(pkgPath, 'src/index.ts')) 
            ? path.join(pkgPath, 'src/index.ts')
            : fs.existsSync(path.join(pkgPath, 'index.ts'))
            ? path.join(pkgPath, 'index.ts')
            : path.join(pkgPath, `${packageName}.ts`);

        // Create target structure
        const targetDir = path.join(DIST_DIR, packageName);
        if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

        const outputFile = path.join(targetDir, `${packageName}.js`);

        // Build standalone bundle using IIFE
        execSync(`npx esbuild ${entryPoint} --bundle --minify --format=iife --platform=browser --outfile=${outputFile}`, {
            stdio: 'inherit'
        });

        // Copy metadata
        const pkgJsonSrc = path.join(pkgPath, 'package.json');
        if (fs.existsSync(pkgJsonSrc)) {
            fs.copyFileSync(pkgJsonSrc, path.join(targetDir, 'package.json'));
        }

        const readmeSrc = path.join(pkgPath, 'README.md');
        if (fs.existsSync(readmeSrc)) {
            fs.copyFileSync(readmeSrc, path.join(targetDir, 'README.md'));
        }

        const assetsSrc = path.join(pkgPath, 'assets');
        if (fs.existsSync(assetsSrc) && fs.lstatSync(assetsSrc).isDirectory()) {
            try {
                execSync(`cp -R ${assetsSrc} ${targetDir}/`);
            } catch (cpErr) {
                console.warn(`⚠️ Warning: Failed to copy assets for ${packageName}: ${cpErr.message}`);
            }
        } else {
            console.log(`ℹ️ No assets directory found for ${packageName}, skipping copy.`);
        }

        console.log(`Successfully built ${packageName}! -> ${targetDir}`);
    } catch (err) {
        console.error(`Failed to build ${packageName}:`, err.message);
    }
}

if (buildAll) {
    const packages = fs.readdirSync(PACKAGES_DIR).filter(f => fs.lstatSync(path.join(PACKAGES_DIR, f)).isDirectory());
    packages.forEach(buildPackage);
} else if (packageArg) {
    buildPackage(packageArg);
} else {
    console.log('Please specify --all or --package=NAME');
}
