"use client"
import React, { useEffect, useState } from "react"
import Header from "@/components/Landing/Header"
import { getAllRooms } from "../../../api/roomApi"
import RoomCard from "./RoomCard"

const RoomListing = () => {
  const [allRooms, setAllRooms] = useState([])
  const handleFetchRooms = async () => {
    try {
      const response = await getAllRooms()
      if (response?.success) {
        setAllRooms(response?.data)
      }
      console.log(response, "res")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleFetchRooms()
  }, [])

  return (
    <>
      <Header />
      {allRooms?.map((obj) => (
        <RoomCard key={obj?._id} obj={obj} />
      ))}
    </>
  )
}

export default RoomListing
