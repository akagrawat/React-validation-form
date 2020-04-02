import React from 'react';
import TemperatureInput from './temperatureInput';
import BoilingVerdict from './boilingStatus';
import './calculator.css';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }

    }

    handleCelsiusChange = (temperature) => {
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            temperature: temperature,
            scale: 'f'
        })
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = (scale === 'f') ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div className="card-body">
                <h2 className="title">Temperature Converter</h2>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict temperature={temperature} celsius={parseFloat(temperature)} />
            </div>
        )
    }
}


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default Calculator;