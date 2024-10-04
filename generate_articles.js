javascript
const fs = require('fs');
const path = require('path');
const markdownToJsx = require('markdown-to-jsx');

const postsDir = path.join(__dirname, 'posts');
const outputDir = path.join(__dirname, 'output');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Read all markdown files in the posts directory
fs.readdir(postsDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        if (path.extname(file) === '.md') {
            const filePath = path.join(postsDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const jsxContent = `
                import React from 'react';
                import Markdown from 'markdown-to-jsx                const MarkdownContent = () => (
';                     <div>
                                                   <Markdown>
                                                                                        {${JSON.stringify(fileContent)}}
                                 </Markdown>
                                                       const jsxFilePath = path.join(outputDir MarkdownContent;
                    </div>             `;
                                          ,
                                ```

                                                                                    );
                                                                                                   
                 export default
                

