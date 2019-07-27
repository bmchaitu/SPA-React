import React ,{Component} from 'react';


//COntrolled Components
class Mycomponent extends Component{

	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state={value:''}
	}

	handleChange(event){
		this.setState({value:event.target.value});
	}

	handleSubmit(event){
		alert('Form Submitted:'+this.state.value);
		event.preventDefault();

	}

	// render(){
	// 	return(
	// 		<div>
	// 			<form onSubmit={this.handleSubmit} >
	// 				<label>
	// 					Name:
	// 					<input type="string" value={this.state.value} onChange={this.handleChange} />
	// 				</label>
	// 				<button type="submit">Submit</button>
	// 			</form>
	// 		</div>
	// 	);
	// }
	render(){
		return(
			<form onSubmit={this.handleSubmit} >
				<input type="text" name="myText" value={this.state.value} onChange={this.handleChange}  /> 
				<button type="submit" >Submit</button>
			</form>
			)
	}
}

export default Mycomponent;