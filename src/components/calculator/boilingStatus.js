import React from 'react';

function BoilingVerdict(props) {
    if (props.temperature === '') {
        return <p>Enter temperature to check whether the water would boil at a given temperature: </p>

    } else {
        if (props.celsius >= 100) {
            return <p>The water would Boil.</p>;
        } else {
            return <p>The water would not Boil.</p>;
        }
    }
}

export default BoilingVerdict;