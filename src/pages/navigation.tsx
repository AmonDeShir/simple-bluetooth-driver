import React from "react";
import { useAppSelector } from "../store/store"
import { Auth } from "./auth/auth"
import { App } from "./app/app"

export const Navigation = () => {
  const { page } = useAppSelector(state => state.navigation)

  switch (page) {
    case "auth":
      return <Auth />
    case "app":
      return <App />
  }
}