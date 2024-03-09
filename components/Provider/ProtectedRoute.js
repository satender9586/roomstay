"use client"
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../Tools/Loader";
import { tokenVerificationAsync } from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

export const ADMINPROTECTEDROUTES = Object.freeze({
    DASHBOARD: '/dashboard',
    PRODUCT_ADD: '/addProduct',
    EDIT_PRODUCT: '/editProduct',
    CONTACT_EMAIL: '/mails',
})

export const USERPROTECTEDROUTES = Object.freeze({
    SINGLE_ORDER:"/order",
    ORDERS: "/orders"
})

const NORMALROUTES = Object.freeze({
    LANDING: '/',
    LOGIN: '/login',
    SIGN_UP: '/signup',
    SHOP: '/shop',
    ABOUT: '/about',
    CONTACT: '/contact',
    CART: "/cart",
})





//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { status, isUserLogged, isAdminLogged } = useSelector((state) => state?.user)
    // console.log(isUserLogged, isAdminLogged, "selector", status)

    const checkUserAuthentication = () => {
        if (status === "success") {

            if (isAdminLogged) {
                checkAdminProtectedRoutes()
            }
            else if (isUserLogged) {
                checkUserProtectedRoutes()
            }
            else {
                checkUnprotecedRoutes()
            }
            setIsLoading(false)

        } else if (status === "error") {
            checkUnprotecedRoutes()
            setIsLoading(false)
        }

    }


    const checkAdminProtectedRoutes = () => {
        // Admin logged In
        let myRoutes = [
            ADMINPROTECTEDROUTES.DASHBOARD,
            ADMINPROTECTEDROUTES.PRODUCT_ADD,
            ADMINPROTECTEDROUTES.EDIT_PRODUCT,
            ADMINPROTECTEDROUTES.CONTACT_EMAIL,
            ADMINPROTECTEDROUTES.SERVICE_DETAIL
        ];

        let currentPath = location.pathname; 
        let pathNotFound = myRoutes.indexOf(currentPath) === -1;

        //If path not found then redirect admin to dashboard
        if (isBrowser() && pathNotFound) {
            navigate(ADMINPROTECTEDROUTES.DASHBOARD);
        }
    }


    const checkUserProtectedRoutes = () => {
        // User logged In
        let myRoutes = [
            NORMALROUTES.LANDING,
            NORMALROUTES.SHOP,
            NORMALROUTES.ABOUT,
            NORMALROUTES.CONTACT,
            NORMALROUTES.CART,
            USERPROTECTEDROUTES.ORDERS,
            USERPROTECTEDROUTES.SINGLE_ORDER,
        ];

        let currentPath = location.pathname;
        
        // Our order path is /order/12345 something, so we have to slice path to compare
        if(currentPath.slice(0,6)===USERPROTECTEDROUTES.SINGLE_ORDER)
        {
            currentPath="/order"
        }

        let pathNotFound = myRoutes.indexOf(currentPath) === -1;

        // When path not found in my routes make it redirect to index page
        if (isBrowser() && pathNotFound) {
            navigate(NORMALROUTES.LANDING);
        }
    }


    const checkUnprotecedRoutes = () => {
        // User not logged In
        let myRoutes = [
            NORMALROUTES.LANDING,
            NORMALROUTES.LOGIN,
            NORMALROUTES.SIGN_UP,
            NORMALROUTES.FORGET,
            NORMALROUTES.SHOP,
            NORMALROUTES.ABOUT,
            NORMALROUTES.CONTACT,
            NORMALROUTES.CART,
        ];

        let currentPath = location.pathname;

        let pathNotFound = myRoutes.indexOf(currentPath) === -1;

        // When path not found in my routes make it redirect to index page
        if (isBrowser() && pathNotFound) {
            navigate(NORMALROUTES.LANDING);
        }


    }


    useEffect(() => {
        // Fetch user details when render
        checkUserAuthentication()
    }, [isUserLogged, isAdminLogged, status])

    useLayoutEffect(() => {
        setIsLoading(true)
        dispatch(tokenVerificationAsync());
    }, [])

    if (isLoading) {
        return <Loader />
    } else {
        return children;
    }

};

export default ProtectedRoute;


