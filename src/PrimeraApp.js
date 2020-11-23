import React, {Fragment} from 'react';
import PropTypes from 'prop-types'


const PrimeraApp = ({ saludo, subtitulo }) => {

    


    return (
        <Fragment>        
            <h1> { saludo }!!!!</h1>
            <h3> { subtitulo } </h3>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un'
}

export default PrimeraApp;