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

        // Custom require shim for browser environment
        const shim = `var require = (m) => {
            if (m === 'lit') return window.lit;
            if (m === 'lit/decorators.js') return window['lit/decorators.js'];
            if (m === 'zero-annotation') return window['zero-annotation'];
            throw new Error('Dynamic require of ' + m + ' not supported in plugin bundle');
        };`;

        // Build bundle using IIFE and assuming globals are available on window
        execSync(`npx esbuild ${entryPoint} --bundle --minify --format=iife --platform=browser --outfile=${outputFile} --external:lit --external:lit/decorators.js --external:zero-annotation --banner:js="${shim}"`, {
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
            execSync(`cp -R ${assetsSrc} ${targetDir}/`);
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
