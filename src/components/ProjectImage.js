import React from 'react'
import ProptTypes from 'prop-types'

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

Project.proptypes = {
    projectImg: PropTypes.string
}

export default ProjectImage