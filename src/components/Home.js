import React from 'react'
import Nav from './Nav.js'
import {Link} from 'react-router-dom'
import '../styles/home.css'

const Home = props => {
    return (
        <div className="home">
            <header>
                <div>
                    <h1>V School Projects</h1>
                    <h3>Full Stack Project Examples</h3>
                </div>
            </header>
            <Nav />
        </div>
    )
}

export default Home