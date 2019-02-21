import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/Home.js'
import './styles/index.css'

const App = props => {
    return (
        <div>
            <Switch>
                <Route exact path="/"             render={ rProps => <Home {...rProps}/> }/>
                <Route path="/precourse-work"     render={ rProps => <></>}/>
                <Route path="/html-css-js"        render={ rProps => <></>}/>
                <Route path="/react-api"          render={ rProps => <></>}/>
                <Route path="/personal-fullstack" render={ rProps => <></>}/>
                <Route path="/group-fullstack"    render={ rProps => <></>}/>
            </Switch>
            <footer>
                <span>V School</span>
                <div onClick={() => props.history.goBack()}>Back</div>
            </footer>
        </div>
    )
}

export default withRouter(App)