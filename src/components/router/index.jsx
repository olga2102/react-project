import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";

import PostsPage from "../pages/posts-page";
import TodoPage from "../pages/todo-page";
import SinglePostPage from "../pages/single-post-page";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>ERROR 404</div>,
      children: [
        {
          path: "/",
          index: true,
          element: <PostsPage />,
        },
        {
          path: "/posts/:postId",
          element: <SinglePostPage />,
        },
        {
          path: "/todo",
          element: <TodoPage />
        },
      ]
    }
  ]);

  export default router;