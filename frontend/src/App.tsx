import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MyPage from "./components/Mypage";
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
    element:
      <ProtectedRoute>
        <MyPage />
      </ProtectedRoute>
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  return (

    <main className="w-full h-full min-h-[100vh] flex flex-col">
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;
