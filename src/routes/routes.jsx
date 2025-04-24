import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhonesDetails from "../pages/PhonesDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:MainLayout,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
        path:'/',
        Component:Home,
        hydrateFallbackElement:<p>Loading, Please Wait...</p>,
        loader:()=>fetch('../phones.json')
        },
        {
            path:'favorites',
            Component:Favorites
        },
        {
            path:'about',
            Component:About
        },
        {
            path:'phone-details/:id',
            Component:PhonesDetails,
            hydrateFallbackElement:<p>Loading, Please Wait...</p>,
            loader:()=>fetch('../phones.json')
        }
      ]  
    },
  ]);