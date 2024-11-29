"use client"

import { ToastContainer } from "react-toastify"

const { SessionProvider } = require("next-auth/react")

export default function SessionContexts({childProp}){
    return(
        <SessionProvider>
          {childProp}
          <ToastContainer />
        </SessionProvider>
    )
}
