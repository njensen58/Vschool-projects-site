import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/Home.js'
import ProjectList from './components/ProjectList.js'
import routesData from './static-data/routes.json'
import './styles/index.css'

const App = props => {
    return (
        <div className="app-container">
            <Switch>
                <Route exact path="/"             render={ rProps => <Home {...rProps}/> }/>
                { routesData.routes.map(({path, listTitle, listDescription, projectsArr}, i) => 
                    <Route path={path} key={i} render={rProps => 
                        <ProjectList 
                            {...rProps} 
                            listName={listTitle} 
                            listDescription={listDescription} 
                            projectsArr={projectsArr}/>}/>
                )}
            </Switch>
            <footer>
                <span>V School</span>
                <div onClick={() => props.history.goBack()}>Back</div>
            </footer>
        </div>
    )
}

export default withRouter(App)