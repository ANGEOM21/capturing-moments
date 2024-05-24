import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";
import Coba from "@pages/Coba";
import About from "@pages/About";

const Rootrouter = createBrowserRouter([
  {
    // root
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/coba",
    element: <Coba />
  }
]);

function Router() {
  return <RouterProvider router={Rootrouter} />;
}

export default Router;
