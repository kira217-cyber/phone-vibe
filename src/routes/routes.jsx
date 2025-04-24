import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhonesDetails from "../pages/PhonesDetails";
import ErrorPage from "../pages/ErrorPage";
import Carts from "../components/Carts/Carts";
import Loader from "../components/Loader/Loader";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:MainLayout,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
        path:'/',
        Component:Home,
        hydrateFallbackElement:<Loader></Loader>,
        loader:()=>fetch('../phones.json')
        },
        {
            path:'favorites', 
            Component:Favorites,
            hydrateFallbackElement:<Loader></Loader>
        },
        {
          path:'carts',
          Component:Carts,
          hydrateFallbackElement:<Loader></Loader>
        },
        {
            path:'about',
            Component:About,
            hydrateFallbackElement:<Loader></Loader>
        },
        {
            path:'phone-details/:id',
            Component:PhonesDetails,
            hydrateFallbackElement:<Loader></Loader>,
            loader:()=>fetch('../phones.json')
        }
      ]  
    },
  ]);