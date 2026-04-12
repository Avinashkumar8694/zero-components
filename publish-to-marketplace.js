import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const targetPackage = args[0];

const packagesDir = path.join(__dirname, 'packages');
const pluginsDir = path.join(__dirname, 'server', 'plugins');
const marketplaceDir = path.join(__dirname, '../zero-marketplace/packages');

function getPackageVersion(pkgName) {
    const pkgJsonPath = path.join(packagesDir, pkgName, 'package.json');
    if (fs.existsSync(pkgJsonPath)) {
        const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
        return pkgJson.version || '1.0.0';
    }
    return '1.0.0';
}

function publishPackage(pkgName) {
    console.log(`\n📦 Publishing package: ${pkgName}`);
    
    const version = getPackageVersion(pkgName);
    const versionDir = `v${version}`;
    
    const sourceDir = path.join(pluginsDir, pkgName);
    const targetDir = path.join(marketplaceDir, pkgName, versionDir);
    
    if (!fs.existsSync(sourceDir)) {
        console.log(`⚠️  No build found for ${pkgName}, skipping...`);
        return false;
    }
    
    // Create target directory
    fs.mkdirSync(targetDir, { recursive: true });
    
    // Copy all files from source to target
    const files = fs.readdirSync(sourceDir);
    for (const file of files) {
        const srcFile = path.join(sourceDir, file);
        const destFile = path.join(targetDir, file);
        
        if (fs.statSync(srcFile).isFile()) {
            fs.copyFileSync(srcFile, destFile);
        }
    }
    
    // Read source package.json to preserve metadata (like 'zero' config)
    const srcPkgJsonPath = path.join(packagesDir, pkgName, 'package.json');
    let srcPkgJson = {};
    if (fs.existsSync(srcPkgJsonPath)) {
        srcPkgJson = JSON.parse(fs.readFileSync(srcPkgJsonPath, 'utf8'));
    }

    // Prepare published package.json (merging source metadata)
    const packageJson = {
        ...srcPkgJson,
        name: pkgName,
        version: version,
        description: srcPkgJson.description || `Published from zero-components: ${pkgName}`,
        main: `${pkgName}.js`,
        keywords: [...new Set([...(srcPkgJson.keywords || []), ...getKeywords(pkgName)])],
        author: srcPkgJson.author || "Zero Components",
        license: srcPkgJson.license || "MIT"
    };
    
    fs.writeFileSync(
        path.join(targetDir, 'package.json'),
        JSON.stringify(packageJson, null, 2)
    );
    
    // Copy README if exists
    const readmeSrc = path.join(packagesDir, pkgName, 'README.md');
    if (fs.existsSync(readmeSrc)) {
        fs.copyFileSync(readmeSrc, path.join(targetDir, 'README.md'));
    }
    
    console.log(`✅ Published ${pkgName}@${version} to marketplace`);
    return true;
}

function getKeywords(pkgName) {
    if (pkgName.includes('flow-node')) {
        const nodeType = pkgName.replace('zero-flow-node-', '');
        return ['flow-node', `flow-node-type:${nodeType}`, 'zero-components'];
    }
    return ['zero-components', 'lit', 'web-component'];
}

function publish() {
    console.log('🚀 Publishing packages to zero-marketplace...\n');
    
    // Build exact package or all packages
    console.log('📋 Building packages...');
    try {
        if (targetPackage) {
            execSync(`node build-actions.js ${targetPackage}`, { stdio: 'inherit', cwd: __dirname });
        } else {
            execSync('node build-actions.js', { stdio: 'inherit', cwd: __dirname });
        }
    } catch (e) {
        console.warn('⚠️  Build had some issues, continuing with publish...');
    }
    
    // Get all packages from packages directory
    const packages = fs.readdirSync(packagesDir).filter(pkg => {
        if (pkg.startsWith('.')) return false;
        const stat = fs.statSync(path.join(packagesDir, pkg));
        return stat.isDirectory();
    });
    
    if (packages.length === 0) {
        console.log('❌ No packages found to publish');
        return;
    }
    
    let publishedCount = 0;
    
    if (targetPackage === 'all') {
        // Publish all packages
        console.log(`\n📦 Publishing all ${packages.length} packages...`);
        for (const pkg of packages) {
            if (publishPackage(pkg)) {
                publishedCount++;
            }
        }
    } else if (targetPackage) {
        // Publish specific package
        if (packages.includes(targetPackage)) {
            if (publishPackage(targetPackage)) {
                publishedCount = 1;
            }
        } else {
            console.log(`❌ Package ${targetPackage} not found`);
            return;
        }
    } else {
        // Show usage
        console.log('\n📖 Usage:');
        console.log('  npm run publish              - Show this help');
        console.log('  npm run publish:all          - Build and publish all packages');
        console.log('  npm run publish:package     - Publish specific package (requires argument)');
        console.log('\n📦 Available packages:');
        packages.forEach(pkg => {
            const version = getPackageVersion(pkg);
            console.log(`  - ${pkg}@${version}`);
        });
        return;
    }
    
    console.log(`\n✨ Published ${publishedCount} package(s) to marketplace`);
    console.log('\n📝 Packages are now available in zero-marketplace at:');
    console.log(`   ../zero-marketplace/packages/<package-name>/v<version>/`);
}

publish();