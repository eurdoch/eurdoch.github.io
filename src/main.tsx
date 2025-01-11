import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import About from './About.tsx';
import Blog from './Blog.tsx';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import './output.css'
import Article from './Article.tsx';

export const API_URL = 'https://blog.directto.link';

const router = createHashRouter([
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
        path: "blog/:id",
        element: <Article />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

