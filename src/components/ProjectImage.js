import React from 'react'
import PropTypes from 'prop-types'

const ProjectImage = ({ projectImg }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${projectImg})`,
                width: '100%'
            }}
            className="">
        </div>
    )
}

ProjectImage.propTypes = {
    projectImg: PropTypes.string
}

export default ProjectImage