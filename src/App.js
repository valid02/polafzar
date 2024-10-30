import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
