import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packagesDir = path.join(__dirname, 'packages');
const pluginsDir = path.join(__dirname, 'server', 'plugins');

async function buildAll() {
    console.log('Building all components and actions...');
    const packages = fs.readdirSync(packagesDir);

    for (const pkg of packages) {
        if (pkg.startsWith('.')) continue; // skip hidden files

        const pkgPath = path.join(packagesDir, pkg);
        
        // 1. Run zero-gen build for the package first
        try {
            console.log(`Building component ${pkg} with zero-gen...`);
            // we use child_process to invoke zero-gen for each package
            execSync(`npx zero-gen build ${pkg}`, { stdio: 'inherit', cwd: __dirname });
        } catch (e) {
            console.warn(`⚠️ zero-gen build had warnings for ${pkg} (e.g. missing assets), proceeding with action build anyway`);
        }

        // 2. Build action.ts
        const actionFile = path.join(pkgPath, 'action.ts');
        if (fs.existsSync(actionFile)) {
            const outDir = path.join(pluginsDir, pkg);
            
            // Ensure output directory exists (zero-gen build creates it, but just in case)
            if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir, { recursive: true });
            }

            const outPath = path.join(outDir, 'action.js');
            
            try {
                await build({
                    entryPoints: [actionFile],
                    bundle: true,
                    outfile: outPath,
                    format: 'esm',
                    target: 'es2022',
                    minify: false,
                    // externalize everything we don't want bundled
                    external: []
                });
                console.log(`✅ Built ${pkg}/action.ts -> server/plugins/${pkg}/action.js`);
            } catch (err) {
                console.error(`❌ Failed to build ${pkg}/action.ts:`, err);
            }
        }
    }
    console.log('Action build complete.');
}

buildAll();
