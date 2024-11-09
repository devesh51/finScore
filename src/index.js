import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Heropage from './components/Home/Heropage';
import Employee from './components/Pages/Employee';
import Advisor from './components/Pages/Advisor';
import MFScreener from './components/Home/MFScreener/MFScreener';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path : "/",
        element: <Heropage/>
    },
    {
      path : "/employee",
      element: <Employee/>
    },
    {
      path : "/advisor",
      element: <Advisor/>
    },
    {
      path : "/MF-Screener",
      element: <MFScreener/>
    },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

