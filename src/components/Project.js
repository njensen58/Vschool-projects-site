import React from 'react'
import ProjectImg from './ProjectImage'
import PropTypes from 'prop-types'

const Project = ({title, description, projectUrl, projectImg}) => {
    return (
        <div>
            <div>
                <ProjectImg projectImg={projectImg}/>
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={projectUrl}>Link to the Project!</a>
            </div>
        </div>
    )
}


Project.proptypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    projectImg: PropTypes.string,
    projectUrl: PropTypes.string.isRequired
}

export default Project