import React, {Fragment} from 'react';
import PropTypes from 'prop-types'


const PrimeraApp = (props) => {

    console.log(props);


    return (
        <Fragment>        
            <h1>Hola Mundo</h1>
            <h3>Un h3 con fragment</h3>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;