import React from 'react'
import Project from './Project'
import PropTypes from 'prop-types'
import '../styles/project.css'

const ProjectList = ({listName, listDescription, projectsArr}) => {
    return (
        <div className="list-container">
            <header>
                <div className="overlay">
                    <h1>{listName}</h1>
                    <h3>{listDescription}</h3>
                </div>
            </header>
            <div className="project-list-container">
                { projectsArr.map((project, i)=> <Project {...project} key={i}/>)}
            </div>
        </div>
    )
}

ProjectList.propTypes = {
    listName: PropTypes.string.isRequired,
    listDescription: PropTypes.string.isRequired,
    projectsArr: PropTypes.array.isRequired
}

export default ProjectList
