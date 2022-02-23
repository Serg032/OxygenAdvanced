import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'

const Navigation = () => {
    return( 
        <Routes>
            <Route path="/home" element = {<Home/>}/>
        </Routes>
    )
}

export default Navigation