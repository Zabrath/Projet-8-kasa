import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/propos",
    element: (
      <>
        <Header />
        <Banner />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
