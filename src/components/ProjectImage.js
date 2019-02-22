import React from 'react'
import PropTypes from 'prop-types'

const ProjectImage = ({ projectImg }) => {
    return (
        <div
            style={{ backgroundImage: `url(${projectImg})`}} 
            className="project-img">
        </div>
    )
}

ProjectImage.propTypes = {
    projectImg: PropTypes.string
}

export default ProjectImage