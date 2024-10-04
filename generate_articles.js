import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const postsDir = path.join(import.meta.dirname, 'posts');
const outputDir = path.join(import.meta.dirname, 'src');
const blogFilePath = './src/Blog.tsx';

fs.readdir(postsDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        if (path.extname(file) === '.md') {
            const filePath = path.join(postsDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const jsxContent = `
import Markdown from 'markdown-to-jsx'; 

const ${path.basename(file, '.md')} = () => {
    <div>
        <Markdown>
          {${JSON.stringify(fileContent)}}
        </Markdown>
    </div>             
}

export default ${path.basename(file, '.md')}`;

            const outputFilePath = path.join(outputDir, path.basename(file, path.extname(file)) + '.tsx');
 
            fs.writeFileSync(outputFilePath, jsxContent);
      }
    });
});

fs.readdir(postsDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter for .jsx files
  const jsxFiles = files.filter(file => path.extname(file) === '.jsx');

  // Generate new link elements
  const newLinks = jsxFiles.map(file => {
    const name = path.basename(file, '.jsx');
    return `        <div className="indent-8"><Link to="/posts/${name}">${name.replace(/-/g, ' ')}</Link></div>`;
  });

  // Read the existing Blog.tsx file
  fs.readFile(blogFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Find the position to insert the new links
    const insertPosition = data.indexOf('<div className="font-bold">ML</div>') + 
                           '<div className="font-bold">ML</div>'.length;

    // Insert the new links
    const updatedContent = data.slice(0, insertPosition) + '\n' + 
                           newLinks.join('\n') + '\n' + 
                           data.slice(insertPosition);

    // Write the updated content back to Blog.tsx
    fs.writeFile(blogFilePath, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Blog.tsx has been updated successfully.');
    });
  });
});
