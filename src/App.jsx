import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <div><Header /><Home /><Footer /></div>
  },
  {
    path:'/blog',
    element: <div>blog</div>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
