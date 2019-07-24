import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import funcomponent from 'funcomponent';

//reactDOM checks compares the element and its children to the previous on 
//and applies to the only DOM updates neccessary to bring the desired state. 
function tick() {
  return  (
    <div>
      <h1>Hello, world!</h1>
      <funcomponent />
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  
}
const clock = () =>{
	const element = tick();
	ReactDOM.render(element, document.getElementById('root'));

}
setInterval(clock, 1000);


// function Clock(props)
// {
// 	return(
// 		<div>
// 			<h1>Hello World</h1>
// 			<h2>it is {props.date.toLocaleTimeString()} </h2>
// 		</div>
// 	)
// }

// function tick()
// {
// 	ReactDOM.render(<Clock date = {new Date()} />,document.getElementById('root'));

// }

// setInterval(tick,1000);
