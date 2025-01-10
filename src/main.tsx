import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import About from './About.tsx';
import Blog from './Blog.tsx';
import Posts from './Posts.tsx';
import AnArticle from './posts/AnArticle.tsx'
import SomeNews from './posts/SomeNews.tsx'
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import './output.css'

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
        path: "posts",
        element: <Posts />,
        children: [
          { path: "an_article", element: <AnArticle /> },
{ path: "some_news", element: <SomeNews /> }
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

