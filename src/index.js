import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Heropage from './components/Home/Heropage';
import Employee from './components/Pages/Employee';
import Advisor from './components/Pages/Advisor';
import MFScreener from './components/Home/MFScreener/MFScreener';
import AdvisorPage from './components/Home/FindAdvisorComponent/AdvisorPage';
import CheckInvestmentScore from './components/Home/CheckSocreSection/CheckInvestmentScore';
import EvaluatePortfolio from './components/Home/CheckSocreSection/EvaluatePortfolio';
import UploadCASComponent from './components/Home/CheckSocreSection/UploadCASComponent';

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
    {
      path : "/AdvisorPage",
      element: <AdvisorPage/>
    },
    {
      path:"/checkInvestmentScore",
      element: <CheckInvestmentScore/>
    },
    {
      path:"/evaluatePortfolio",
      element: <EvaluatePortfolio/>
    },
    {
      path:"/uploadCASComponent",
      element: <UploadCASComponent/>
    }
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

