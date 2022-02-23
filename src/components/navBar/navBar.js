import React from "react"
import { Link } from 'react-router-dom'
import './navBar.css'
import logo from './../../images/logo.png'

const NavBar = () => {
    return(
        <div className="navBar">
            <div className="appLogo">
                <img className="logo" src= {logo}/>
            </div>
            <div className="linksBox">
                <Link className="link" to= "/home">HOME</Link>
            </div>
        </div>
    )
}

export default NavBar