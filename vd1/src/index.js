import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Component/Login';
import ErrorPage from './Component/Error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Component/Register';
import User from './Component/User';
import DetailUsers from './Component/DetailUsers';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducers'

const main = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    exact: true,
    element: <User />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/:id",
    element: <DetailUsers />,
    errorElement: <ErrorPage />,
  },
]);
const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><RouterProvider router={main} /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
