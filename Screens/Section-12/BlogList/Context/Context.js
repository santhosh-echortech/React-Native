import React, { createContext, useState, useReducer } from "react"

const Context = createContext()

export const Provider = ({ children }) => {
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'addBlogPosts':
    //             return [...state, {id:Math.floor(Math.random()*9999), title: `BlogPost ${state.length + 1}` }]

    //         default:
    //             return state
    //     }
    // }

    // const [blogPosts, dispatch] = useReducer(reducer, [])

    const dummyData = [{ "title": "V8 Vantage" },
    { "title": "Xterra" },
    { "title": "1500 Club Coupe" },
    { "title": "Scirocco" },
    { "title": "Cutlass Supreme" },
    { "title": "57" },
    { "title": "GTO" },
    { "title": "ZDX" },
    { "title": "Aerio" },
    { "title": "MKX" }]

    const [blogList, setBlogList] = useState([])

    // const addBlogPost=()=>{
    //     dispatch({type:'addBlogPosts'})
    // }

    return (
        <Context.Provider value={{
            blogList, setBlogList
            // addBlogPost,blogPosts
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context