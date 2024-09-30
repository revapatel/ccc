import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from 'react'
import './components/style/App.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage.jsx";
import Header from "./components/Header.jsx";
import CountryDetail from "./components/CountryDetail.jsx";



const App = () => {
  const [dark ,setDark]= useState(JSON.parse(localStorage.getItem('darkmode')))
  return (
    <div className=" ">
     <Header theme={[dark,setDark]}/>
     <Outlet context={[dark,setDark]}/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/:country',
        element:<CountryDetail/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);