import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/Home.js'
import ProjectList from './components/ProjectList.js'
import routesData from './static-data/routes.json'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './styles/index.css'
import './styles/transitions.css'

const App = props => {
    const { location } = props
    return (
        <div className="app-container">
            <TransitionGroup>
                <CSSTransition
                    in={false}
                    appear={false}
                    key={location.key}
                    timeout={400}
                    classNames="page-fade"
                >
                    <Switch location={location}>
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
                </CSSTransition>
            </TransitionGroup>
            <footer>
                <span>V School</span>
                <div onClick={() => props.history.goBack()}>Back</div>
            </footer>
        </div>
    )
}

export default withRouter(App)