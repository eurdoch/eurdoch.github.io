import fs from 'fs';
import path from 'path';

javascript
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const postsDir = path.join(__dirname, 'posts');
const outputDir = path.join(__dirname, 'src');

fs.readdir(postsDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        if (path.extname(file) === '.md') {
            const filePath = path.join(postsDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const jsxContent = `
                import React from 'react';
                import Markdown from 'markdown-to-jsx'; 

                const ${path.basename(file, '.md')} = () => {
                     <div>
                          <Markdown>
                            {${JSON.stringify(fileContent)}}
                          </Markdown>
                    </div>             
                }

                export default ${path.basename(file, '.md')};
            `;

            const outputFilePath = path.join(outputDir, path.basename(file, path.extname(file)) + '.tsx');
 
            fs.writeFileSync(outputFilePath, jsxContent);
      }
    });
});
