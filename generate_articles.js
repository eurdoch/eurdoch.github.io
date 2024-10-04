import fs from 'fs';
import path from 'path';

const postsDir = path.join(import.meta.dirname, 'posts');
const outputDir = path.join(import.meta.dirname, 'src/posts');
const blogFilePath = './src/Blog.tsx';
const mainDir = path.join(import.meta.dirname, 'src/main.tsx');

function camelToSnakeCase(str) {
  return str.split(/(?=[A-Z])/).join('_').toLowerCase();
}

function separateCamelToe(str) {
  return str.split(/(?=[A-Z])/).join(' ');
}

fs.readdir(postsDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        if (path.extname(file) === '.md') {
            const filePath = path.join(postsDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const jsxContent = `
import Markdown from 'markdown-to-jsx'; 

const ${path.basename(file, '.md')} = () => {
    return (
        <div>
            <Markdown>
                {${JSON.stringify(fileContent)}}
            </Markdown>
        </div>             
    )
}

export default ${path.basename(file, '.md')}`;

            const outputFilePath = path.join(outputDir, path.basename(file, path.extname(file)) + '.tsx');
            fs.writeFileSync(outputFilePath, jsxContent);
        }
    });

    fs.readdir(outputDir, (err, files) => {
        if (err) {
          console.error('Error reading directory:', err);
          return;
        }

        // Generate new link elements
        const newLinks = files.map(file => {
          const name = path.basename(file, '.tsx');
          const url_suffix = camelToSnakeCase(name);
          return `<div className="indent-8"><Link to="/posts/${url_suffix}">${separateCamelToe(name)}</Link></div>`;
        });

        const blogReactComponent = `
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <div className="text-xl">
        <div className="font-bold">ML</div>
        ${newLinks.join('\n')}
      </div> 
    </div>
  )
}

export default Blog
`;

    fs.writeFile(blogFilePath, blogReactComponent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Blog.tsx has been updated successfully.');
    });

    const mainContent = `
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import About from './About.tsx';
import Blog from './Blog.tsx';
import Posts from './Posts.tsx';
${files.map(file => {
  const basename = path.basename(file, path.extname(file));
  return `import ${basename} from './posts/${basename}.tsx'`
}).join('\n')}
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './output.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "posts",
        element: <Posts />,
        children: [
          ${files.map(file => {
            const basename = path.basename(file, path.extname(file));
            const url_suffix = camelToSnakeCase(basename);
            return `{ path: "${url_suffix}", element: <${basename} /> }`
          }).join(',\n')}
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

`;

    fs.writeFile(mainDir, mainContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('main.tsx built successfully.');
    });
  });
})
