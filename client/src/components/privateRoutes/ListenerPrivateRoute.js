import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '../helper'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ListenertPrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuth() && isAuth().role === 'listener' ? (
          <Component {...props} />
        ) : (
            <React.Fragment>
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
              <ToastContainer />
              {toast.error("Please login first")}
            </React.Fragment>
          )
      }
    />
  );
}


export default ListenertPrivateRoute;
