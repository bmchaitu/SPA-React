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

	}

	render(){

		return(
			 <form >
        
        </form>);
	}
}