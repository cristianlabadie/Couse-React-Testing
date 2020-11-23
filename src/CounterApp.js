import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value} ) => {

    const [ contador, setContador ] = useState(value)

    const handleSuma = () => {        
        setContador( contador + 1 )        
    }

    const handleReset = () => {        
        setContador( value )        
    }

    const handleResta = () => {        
        setContador( contador - 1 )        
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{contador}</h2>


            <button onClick={ handleSuma }>+1</button><br></br>
            <button onClick={ handleReset }>Reset</button><br></br>
            <button onClick={ handleResta }>-1</button>
        </Fragment>
    )

} 



CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp