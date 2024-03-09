"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Loader from "../Tools/Loader";
import { tokenVerificationAsync } from "../../redux/reducers/userSlice";
// import { useNavigate } from "react-router-dom";
import { tokenVerification } from "../../api/userApi";
import { getToken } from "../../utils/auth";
import { useRouter } from "next/navigation";

export const ADMINROUTEOBJ = Object.freeze({
  DASHBOARD: "/dashboard",
});

export const USERROUTEOBJ = Object.freeze({
  BILL: "/bill",
  LANDING: "/"
});

const UNPROTECTEDROUTEOBJ = Object.freeze({
  LANDING: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  FORGET:'/forget'
  
});

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const token = getToken();

  const fetchUser = async () => {
    if (token) {
      try {
        const response = await tokenVerification();
        console.log(response, "response");
        if (response?.success) {
          if (response?.user?.isAdmin) {
            adminProtectedRoutesFun();
          } else {
            userProtectedRoutesFun();
          }
        } else {
          unprotecedRoutesFun();
        }
      } catch (error) {
        console.log(error, "error");
      }

      setIsLoading(false);
    } else {
      unprotecedRoutesFun();
      setIsLoading(false);
    }
  };

  const adminProtectedRoutesFun = () => {
    // Admin logged In
    let myRoutes = [ADMINROUTEOBJ.DASHBOARD];

    let currentPath = location.pathname;
    let pathNotFound = myRoutes.indexOf(currentPath) === -1;

    //If path not found then redirect admin to dashboard
    if (isBrowser() && pathNotFound) {
      // navigate(ADMINPROTECTEDROUTES.DASHBOARD);
    }
  };

  const userProtectedRoutesFun = () => {
    // User logged In
    let myRoutes = [USERROUTEOBJ.LANDING, USERROUTEOBJ.BILL];

    let currentPath = location.pathname;
    
    let pathNotFound = myRoutes.indexOf(currentPath) === -1;
    
    console.log(currentPath,pathNotFound,myRoutes, "currentPath");
    // When path not found in my routes make it redirect to index page
    if (isBrowser() && pathNotFound) {
      router.replace(UNPROTECTEDROUTEOBJ.LANDING);
    }
  };

  const unprotecedRoutesFun = () => {
    // User not logged In
    let myRoutes = [
      UNPROTECTEDROUTEOBJ.LANDING,
      UNPROTECTEDROUTEOBJ.LOGIN,
      UNPROTECTEDROUTEOBJ.SIGN_UP,
      UNPROTECTEDROUTEOBJ.FORGET,
    ];

    let currentPath = location.pathname;

    let pathNotFound = myRoutes.indexOf(currentPath) === -1;

    // When path not found in my routes make it redirect to index page
    if (isBrowser() && pathNotFound) {
      router.replace(UNPROTECTEDROUTEOBJ.LANDING);
    }
  };

  useEffect(() => {
    // Fetch user details when render
    fetchUser();
  }, []);

  if (isLoading) {
    return null;
  } else {
    return children;
  }
};

export default ProtectedRoute;
