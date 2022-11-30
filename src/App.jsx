import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favoritos from "./pages/favoritos";
import Principal from "./pages/Principal";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Principal />,
    children: [
      {
        path: "/favoritos",
        element: <Favoritos />
      }
    ]
  },

]);

function App() {
 
  return (
    <div className="App bg-[#EFF2F6] max-h-max h-screen overflow-y-scroll ">     
        <RouterProvider router={router} />
        
    </div>
  )
}

export default App
