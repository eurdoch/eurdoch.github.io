import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import About from './About.tsx';
import Blog from './Blog.tsx';
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
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

