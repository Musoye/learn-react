import React from 'react';
import PropTypes from 'prop-types';

function Hello(props){
    return (
        <>
         <h1>Welcome to Mustapha's React project practice</h1>
          <p>This is his first react project</p>
          <p>He done this with {props.name}</p>
        </>
    )
}

Hello.defaultProps = {
    name: 'Python'
}

Hello.propTypes = {
    name: PropTypes.string.isRequired
}

export default Hello