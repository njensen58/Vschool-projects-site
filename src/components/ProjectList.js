import React from 'react'
import Project from './Project'
import PropTypes from 'prop-types'

const ProjectList = ({listName, listDescription, projectsArr}) => {
    return (
        <div>
            <header>
                <h1>{listName}</h1>
                <h3>{listDescription}</h3>
            </header>
            <div>
                { projectsArr.map(project => <Project {...project} key={project.id}/>)}
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
