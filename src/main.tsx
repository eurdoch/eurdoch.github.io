import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
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
        path: "/",
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

