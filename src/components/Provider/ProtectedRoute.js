"use client"
import { useEffect, useState } from "react"
import { tokenVerification } from "../../../api/userApi"
import { getUserToken } from "../../../utils/cookies"
import { useRouter } from "next/navigation"
import { giveUserSliceObj } from "../../../utils/sliceMethod"
import { useDispatch } from "react-redux"
import { setUserSlice } from "../../../redux/reducers/userSlice"

export const ADMINROUTEOBJ = Object.freeze({
  DASHBOARD: "/dashboard",
  BILL: "/bill",
  ROOMS: "/rooms",
})

export const USERROUTEOBJ = Object.freeze({
  LANDING: "/",
  ROOMS: "/rooms",
})

const UNPROTECTEDROUTEOBJ = Object.freeze({
  LANDING: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  FORGET: "/forget",
  ROOMS: "/rooms",
})

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined"

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const token = getUserToken()

  const fetchUser = async () => {
    if (token) {
      try {
        const response = await tokenVerification()

        // If response is success then check if user is admin or user.
        // If user is admin then find in admin route check function.
        // If user is user then find in user route check function.
        // If user is not admin or user then check for unprotected routes

        if (response?.success) {
          // Set user details in redux ( User Slice )

          if (response?.user) {
            const userObj = giveUserSliceObj(response?.user)
            dispatch(setUserSlice(userObj))
          }

          if (response?.user?.isAdmin) {
            adminProtectedRoutesFun()
          } else {
            userProtectedRoutesFun()
          }
        } else {
          unprotecedRoutesFun()
        }
      } catch (error) {
        console.log(error, "error")
        // check in unprotected routes
        unprotecedRoutesFun()
      }

      setIsLoading(false)
    } else {
      unprotecedRoutesFun()
      setIsLoading(false)
    }
  }

  const adminProtectedRoutesFun = () => {
    // Admin logged In
    let myRoutes = [ADMINROUTEOBJ.DASHBOARD, ADMINROUTEOBJ.BILL]

    let currentPath = location.pathname
    let pathNotFound = myRoutes.indexOf(currentPath) === -1

    //If path not found then redirect admin to dashboard
    if (isBrowser() && pathNotFound) {
      router.replace(ADMINROUTEOBJ.DASHBOARD)
    }
  }

  const userProtectedRoutesFun = () => {
    // User logged In
    let myRoutes = [USERROUTEOBJ.LANDING]

    let currentPath = location.pathname

    let pathNotFound = myRoutes.indexOf(currentPath) === -1

    console.log(currentPath, pathNotFound, myRoutes, "currentPath")
    // When path not found in my routes make it redirect to index page
    if (isBrowser() && pathNotFound) {
      router.replace(UNPROTECTEDROUTEOBJ.LANDING)
    }
  }

  const unprotecedRoutesFun = () => {
    // User not logged In
    let myRoutes = [
      UNPROTECTEDROUTEOBJ.LANDING,
      UNPROTECTEDROUTEOBJ.LOGIN,
      UNPROTECTEDROUTEOBJ.SIGN_UP,
      UNPROTECTEDROUTEOBJ.FORGET,
      UNPROTECTEDROUTEOBJ.ROOMS,
    ]

    let currentPath = location.pathname

    let pathNotFound = myRoutes.indexOf(currentPath) === -1

    // When path not found in my routes make it redirect to index page
    if (isBrowser() && pathNotFound) {
      router.replace(UNPROTECTEDROUTEOBJ.LANDING)
    }
  }

  useEffect(() => {
    // Fetch user details when render
    fetchUser()
  }, [])

  if (isLoading) {
    return null // Ignore this loading or you can implement loading functionality
  } else {
    return children
  }
}

export default ProtectedRoute
