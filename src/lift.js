import React from 'react';

class Mycomponent extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		if(this.props.temp>=100)
		return(
			<p>The Water Boils</p>
			);
		else
			return(
		<p>The Water doesn't boils</p>
		);
	}
}


class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state={type:'c',temperature:''};
		this.farenhietConversion=this.farenhietConversion.bind(this);
		this.celsuisConversion=this.celsuisConversion.bind(this);
	}
	farenhietConversion(temperature){
		this.setState({temperature:temperature,
						type:'f'});
	}

	celsuisConversion(temperature){
		this.setState({temperature:temperature,
						type:'c'});
	}

	render(){
		const temperature=this.state.temperature;
		const type=this.state.type;
		const celsuis = type === 'f' ? tryconvert(temperature,toCelsius):temperature;
		const farenheit = type === 'c' ? tryconvert(temperature,toFarenheit):temperature;

		return(
			<div>
			<InputComponent type="c" onTemperatureChange={this.celsuisConversion} temperature={celsuis} />
			<InputComponent type="f" onTemperatureChange={this.farenhietConversion} temperature={farenheit} />
			</div>
		)
	}
}

const tempType={
				c:'Celsiuis',
				f:'Farenheit'
			};


class InputComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.onTemperatureChange(event.target.value)
	}

	render(){
		return(
		<div>
		<label>
		Enter the {tempType[this.props.type]} Tempertaure
		<input type="string" name="input" value={this.props.temperature} onChange={this.handleChange} />
		</label>
		{ this.props.temperature ? 
		 <Mycomponent temp={this.props.temperature} /> :
		 <p>The Text Appears here</p>
		 }
		 </div>)
	}
}

function toFarenheit(temp){
	const celsuistemp = parseFloat(temp);
	const farenheit = (celsuistemp * 9 / 5)+32;
	return farenheit;
}

function toCelsius(temp){
	const farenheittemp=parseFloat(temp);
	const celsuis = (farenheittemp - 32) * 5 / 9;
	return celsuis;
}

function tryconvert(temp,converter){
	const convertedTemp = converter(temp);
	if(Number.isNaN(convertedTemp))
	return '';
	return convertedTemp;
}

export default Calculator;