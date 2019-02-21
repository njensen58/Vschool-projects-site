import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/precourse-work">Pre-Course Work</Link>
            <Link to="/html-css-js">HTML/CSS/JS</Link>
            <Link to="/react-api">React API</Link>
            <Link to="/personal-fullstack">Personal Full-Stack</Link>
            <Link to="/group-fullstack">Group Full-Stack</Link>
        </div>
    )
}

export default Nav