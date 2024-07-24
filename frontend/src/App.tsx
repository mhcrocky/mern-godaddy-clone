import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  return (

      <main>
        <RouterProvider router={router}>

        </RouterProvider>
      </main>
  );
}

export default App;
