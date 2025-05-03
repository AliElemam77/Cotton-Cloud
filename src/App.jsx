import "./App.css";
import Register from "./Pages/Register/Index";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Index";
import { HeroUIProvider } from "@heroui/react";
import Notfound from "./Pages/NotFound/index";
import FavoraiteCard from "./Components/FavoraiteCard/index";
import CartCard from "./Pages/Cart/CartCard";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/index";
import Categories from "./Pages/Categories/index";
import RamadanOffers from "./Pages/Ramadan-Offers/index";
import RecentlyAdded from "./Pages/RecentlyAdd";
import FavoraiteProducts from "./Pages/FavoraiteProducts";
import ProductDetails from "./Pages/ProductDetails";
import Order from "./Pages/Order";
import Filter from "./Pages/Filter";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./Pages/Checkout/index";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/BlogDetails/BlogDetails.Jsx";
import Profile from "./Pages/Profile/Profile";
import ProfileInfo from "./Pages/Profile/ProfileInfo";
import Orders from "./Pages/Profile/Orders";
import Favourites from "./Pages/Profile/favourites";
import Notifications from "./Pages/Notifications/Notifications";
import All from "./Pages/Notifications/All";
import TrackOrders from "./Pages/Notifications/TrackOrders";
import Offers from "./Pages/Notifications/Offers";
import Wholesale from "./Pages/Wholesale/index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "wholesale",
        element: <Wholesale />,
      },

      {
        path: "categories",
        element: <Categories />,
      },

      {
        path: "ramadan-offers",
        element: <RamadanOffers />,
      },
      {
        path: "recently-added",
        element: <RecentlyAdded />,
      },
      {
        path: "favoraite-products",
        element: <FavoraiteProducts />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "filter",
        element: <Filter />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/ckeckout",
        element: <Checkout />,
      },

      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "blog/:id",
        element: <BlogDetails />,
      },

      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProfileInfo />,
          },

          {
            path: "orders",
            element: <Orders />,
          },

          {
            path: "favourites",
            element: <Favourites />,
          },
        ],
      },
      {
        path: "notifications",
        element: <Notifications />,
        children: [
          {
            index: true,
            element: <All />,
          },

          {
            path: "recently-added",
            element: <RecentlyAdded />,
          },

          {
            path: "track-orders",
            element: <TrackOrders />,
          },

          {
            path: "offers",
            element: <Offers />,
          },
        ],
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <HeroUIProvider>
        <RouterProvider router={routes}></RouterProvider>
      </HeroUIProvider>
      {/* <ProductDetails /> */}
    </>
  );
}

export default App;
