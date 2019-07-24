import React from 'react';

//Functional Implementation
// function Clock()
// {
// 	return(
// 		<div>
// 			<h1>Hello World</h1>
// 			<h2>it is {props.date.toLocaleTimeString()} </h2>
// 		</div>
// 	)
// }

// functio tick()
// {
// 	ReactDOM.render(<Clock date = new Date() />,document.getElementById('root'));

// }

// setInterval(tick,1000);

//second form of setState()
this.setState((state,props) => ({
	counter:state.counter + props.incrementar
}))

//Class Implementation
class Clock extends Component{
	constructor(props)
	{
		super(props);
		this.state={ date : new Date() };

	}


	tick()
	{
		this.setState({date:new Date()});
	}
	componentDidMount()
	{
		this.timerId = setInterval(() => {
			this.tick();
		},1000)
	}
	componentWillUnmount()
	{
		clearInterval(this.timerId);
	}
	render()
	{	
		<div>
			<h1>
				Hello World
			</h1>
			<h2>
				the Clock ticks at {this.state.date}
			</h2>
		</div>
	}
}

Data always flows downwards
If you imagine a component tree as a waterfall of props, each component’s state 
is like an additional water source that joins it at an arbitrary point but 
also flows down.