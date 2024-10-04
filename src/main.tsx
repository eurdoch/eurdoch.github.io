
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import About from './About.tsx';
import Blog from './Blog.tsx';
import Posts from './Posts.tsx';
import AnArticle from './posts/AnArticle.tsx'
import AnotherArticle from './posts/AnotherArticle.tsx'
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
          { path: "an_article", element: <AnArticle /> },
{ path: "another_article", element: <AnotherArticle /> }
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

