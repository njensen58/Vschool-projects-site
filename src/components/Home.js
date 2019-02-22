import React from 'react'
import Nav from './Nav.js'
import '../styles/home.css'

const Home = props => {
    return (
        <div className="home">
            <header>
                <div className="overlay">
                    <h1>V School Projects</h1>
                    <h3>Full Stack Project Examples</h3>
                </div>
            </header>
            <Nav />
        </div>
    )
}

export default Home