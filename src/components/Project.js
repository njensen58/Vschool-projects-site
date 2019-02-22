import React from 'react'
import ProjectImage from './ProjectImage'
import PropTypes from 'prop-types'

const Project = ({title, description, projectUrl, projectImg}) => {
    return (
        <div className="project-container">
            <div className="img-container">
                <ProjectImage projectImg={projectImg}/>
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={projectUrl}>Link to the Project!</a>
            </div>
        </div>
    )
}


Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    projectImg: PropTypes.string,
    projectUrl: PropTypes.string.isRequired
}

export default Project