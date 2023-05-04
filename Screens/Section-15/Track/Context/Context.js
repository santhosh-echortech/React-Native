import React, { createContext, useState } from "react"

export const Context = createContext()

export const Provider = props => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    return (
        <Context.Provider value={{
            isSignedIn, setIsSignedIn
        }}>
            {props.children}
        </Context.Provider>
    )
}
// export const Consumer = Context.Consumer
