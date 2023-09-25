import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import Root from './components/Root/Root';
import CardDetails from './components/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "donation",
        element: <Donation></Donation>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/CardDetails/:id",
        loader: () => fetch('donationCampaign.json'),
        element: <CardDetails></CardDetails>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
