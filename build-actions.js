import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packagesDir = path.join(__dirname, 'packages');
const pluginsDir = path.join(__dirname, 'server', 'plugins');

const args = process.argv.slice(2);
const targetPackage = args[0];

async function buildAll() {
    if (targetPackage) {
        console.log(`Building specific component: ${targetPackage}...`);
    } else {
        console.log('Building all components and actions...');
    }
    const packages = fs.readdirSync(packagesDir);

    for (const pkg of packages) {
        if (pkg.startsWith('.')) continue; // skip hidden files
        if (targetPackage && pkg !== targetPackage) continue; // skip non-target

        const pkgPath = path.join(packagesDir, pkg);
        
        // 1. Run zero-gen build for the package first
        try {
            console.log(`Building component ${pkg} with zero-gen...`);
            // we use child_process to invoke zero-gen for each package
            execSync(`npx -y zero-gen build ${pkg}`, { stdio: 'inherit', cwd: __dirname });
        } catch (e) {
            console.warn(`⚠️ zero-gen build had warnings for ${pkg} (e.g. missing assets), proceeding with action build anyway`);
        }

        // Ensure target directory exists for all packages
        const outDir = path.join(pluginsDir, pkg);
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }

        // Copy metadata for ALL packages (not just those with action.ts)
        const metadataFiles = ['package.json', 'README.md'];
        metadataFiles.forEach(file => {
            const srcPath = path.join(pkgPath, file);
            if (fs.existsSync(srcPath)) {
                fs.copyFileSync(srcPath, path.join(outDir, file));
            }
        });

        // 2. Build action.ts if it exists
        const actionFile = path.join(pkgPath, 'action.ts');
        if (fs.existsSync(actionFile)) {
            const outPath = path.join(outDir, 'action.js');
            
            try {
                await build({
                    entryPoints: [actionFile],
                    bundle: true,
                    outfile: outPath,
                    format: 'esm',
                    target: 'es2022',
                    minify: true,
                    // No external dependencies for standalone builds
                    external: []
                });

                console.log(`✅ Built ${pkg}/action.ts (standalone/minified) -> server/plugins/${pkg}/action.js`);
            } catch (err) {
                console.error(`❌ Failed to build ${pkg}/action.ts:`, err);
            }
        }
    }
    console.log('Action build complete.');
}

buildAll();
