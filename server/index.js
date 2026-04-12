import express from 'express';
import fs from 'fs';
import path from 'path';
import { env } from 'node:process';
import { fileURLToPath } from 'node:url';
import cors from 'cors'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = env.PORT || 5555;
const basePath = env.BASE_PATH || '/service';

app.use(express.json()); // Middleware to parse JSON bodies

// Use CORS middleware - maximally permissive
app.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
}));

// Create the application and setup routes
const createApp = () => {
    setupRoutes(app, basePath);

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}${basePath}`);
    });

    return app;
};

// Setup application routes and middleware
const setupRoutes = (app, basePath) => {
    const router = express.Router();

    // Ping endpoint
    router.get('/ping', (req, res) => {
        res.json({ message: 'Hello World!' });
    });

    // List files in the 'plugins' directory
    router.get('/files', (req, res) => {
        const pluginsDir = path.join(__dirname, 'plugins');
        if (!fs.existsSync(pluginsDir)) return res.json({ files: [] });
        
        fs.readdir(pluginsDir, (err, files) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to list files' });
            }
            res.json({ files });
        });
    });

    // Add a new file
    router.post('/files', (req, res) => {
        const { fileName, content } = req.body;
        const filePath = path.join(__dirname, 'plugins', fileName);

        if (!fileName || !content) {
            return res.status(400).json({ error: 'File name and content are required' });
        }

        fs.writeFile(filePath, content, err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write file' });
            }
            res.status(201).json({ message: 'File created' });
        });
    });

    // DELETE a file
    router.delete('/files/:fileName', (req, res) => {
        const filePath = path.join(__dirname, 'plugins', req.params.fileName);

        fs.unlink(filePath, err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete file' });
            }
            res.json({ message: 'File deleted' });
        });
    });

    // Configuration persistence
    const configPath = path.resolve('zero-config.json');

    router.get('/config', (req, res) => {
        if (!fs.existsSync(configPath)) {
            const defaultConfig = { installedPlugins: [], activeProvider: '', activeTheme: '' };
            fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
            return res.json(defaultConfig);
        }
        fs.readFile(configPath, 'utf8', (err, data) => {
            if (err) return res.status(500).json({ error: 'Failed to read config' });
            try {
                const config = data.trim() ? JSON.parse(data) : { installedPlugins: [], activeProvider: '', activeTheme: '' };
                res.json(config);
            } catch (parseError) {
                console.warn('[Server] Failed to parse config JSON, returning default', parseError);
                res.json({ installedPlugins: [], activeProvider: '', activeTheme: '' });
            }
        });
    });

    router.post('/config', (req, res) => {
        fs.writeFile(configPath, JSON.stringify(req.body, null, 2), err => {
            if (err) return res.status(500).json({ error: 'Failed to save config' });
            res.json({ message: 'Configuration saved' });
        });
    });

    // Discovery API - Scan packages directory for live development mode
    router.get('/discovery', async (req, res) => {
        const targetDir = path.resolve(__dirname, '../packages');
        if (!fs.existsSync(targetDir)) return res.json({ components: [], themes: [] });

        try {
            const dirs = await fs.promises.readdir(targetDir, { withFileTypes: true });
            const discovery = { components: [], themes: [] };
            
            const promises = dirs.filter(d => d.isDirectory()).map(async (d) => {
                const pkgPath = path.join(targetDir, d.name, 'package.json');
                try {
                    const content = await fs.promises.readFile(pkgPath, 'utf8');
                    const pkg = JSON.parse(content);
                    const plugin = pkg.zeroPlugin || (pkg.zero?.component ? { type: 'component' } : null);
                    
                    if (plugin) {
                        let mainPath = fs.existsSync(path.join(targetDir, d.name, 'src/index.ts')) 
                            ? `/packages/${d.name}/src/index.ts` 
                            : `/packages/${d.name}/${d.name}.ts`;

                        const item = {
                            id: d.name,
                            name: plugin.name || d.name.replace('zero-uiv-', '').toUpperCase(),
                            desc: plugin.description || pkg.description || 'Unified Lit plugin',
                            type: plugin.type || 'component',
                            selector: d.name,
                            main: mainPath
                        };
                        if (item.type === 'theme') discovery.themes.push(item);
                        else discovery.components.push(item);
                    }
                } catch (e) { /* skip */ }
            });

            await Promise.all(promises);
            res.json(discovery);
        } catch (err) {
            res.status(500).json({ error: 'Discovery failure' });
        }
    });

    // Serve static files from 'plugins' directory
    router.use('/plugins', express.static(path.join(__dirname, 'plugins')));

    app.use(basePath, router);
};

// Initialize and run the application
createApp();
