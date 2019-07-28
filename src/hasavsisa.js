import React from 'react';
function FancyBorder(props){
	return(
		<div>
			<h1>Hello World</h1>
			<h1>Here are my Children</h1>
			{props.children}
		</div>
		);
}

function MainComponent(){
	return(
	<div>
		<FancyBorder >
			<h2>This should be repeated</h2>
		</FancyBorder>
	</div>
	)
}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

export default App;
