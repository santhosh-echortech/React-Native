import React, { createContext, useState } from "react"

const Context = createContext()

export const Provider = ({ children }) => {
    const [blogList,setBlogList] =useState([{"title":"V8 Vantage"},
    {"title":"Xterra"},
    {"title":"1500 Club Coupe"},
    {"title":"Scirocco"},
    {"title":"Cutlass Supreme"},
    {"title":"57"},
    {"title":"GTO"},
    {"title":"ZDX"},
    {"title":"Aerio"},
    {"title":"MKX"}])

    const addBlogPosts=()=>{
        setBlogList([...blogList,{title:`My Blog Post ${blogList.length + 1}`}])
    }

    return (
        <Context.Provider value={{
            blogList,setBlogList,addBlogPosts
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context