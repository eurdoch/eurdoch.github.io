
const fs = require('fs');
const path = require('path');
const markdownToJsx = require('markdown-to-jsx');

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

 javascript
       }            const outputFilePath = path.join(outputDir, path.basename(file, path.extname(file)) + '.tsx');

    }
