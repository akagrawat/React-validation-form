import React from 'react';

class TemperatureInput extends React.Component {
    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div className="input-group">
                <span>{(scale === 'c') ? 'Celsius' : 'Fahrenheit'}</span>
                <input className="input--style-2" value={temperature} type="text" onChange={this.handleChange} placeholder={(scale === 'c') ? "°C" : "°F"} name="name" />
            </div>
        )
    }
}

export default TemperatureInput;