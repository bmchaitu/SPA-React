import React,{component} from 'react';
class Mycomponent extends component 
{
	constructor(props)
	{
		super(props);
		this.state ={ isloggedIn:false};
	}
	handleLogIn(){
		this.setState({isloggedIn : true});
	}
	handleLogout(){
		this.setState({isloggedIn : false});
	}
	render(){
		<h1>Hello World</h1>
		{
			isloggedIn ? (
						<UserGreeting />)
					 : (
					 	<GuestGreeting />)
		}
		<button onClick={this.handleLogIn}>Login </button>
		<button onClick={this.handleLogout}>Log Out</button>
	}
}
export default Mycomponent;