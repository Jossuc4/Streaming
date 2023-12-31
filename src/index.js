import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './config/reportWebVitals';
import Main from './pages/Main';
import Details from './pages/Details'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "details",
    element: <Details/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();