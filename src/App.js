import React , {lazy,Suspense} from "react";
import { createRoot } from "react-dom/client";
import Body from "./Components/Body";
import "./index.css";
import Header from "./Components/Header";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenuPage from "./Components/RestaurantMenuPage";
console.log(RestaurantMenuPage);
console.log(typeof RestaurantMenuPage);
//chunking
//code splitting
const Grocery = lazy(() => import("./Components/Grocery"));
const AppLayout = () => {
  return (
    <div>
      <Header />
    <Outlet/>
    </div>
  );
};
// we will have to create routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
   children: [
    { 
 path: "/",
    element: <Body />,
    },
{
  path: "/contact",
  element: <Contact />
},{
  path: "/about",
  element: <About />
},{
  path: "/grocery",
  element: <Suspense fallback ={<h1>hbhjh</h1>}><Grocery /></Suspense> 
},
{
  path:"/restaurants/:resId",
  element: <RestaurantMenuPage />
},
   ],
 
  },
]);
const root = createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter}  />);