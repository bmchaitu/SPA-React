import React from 'react';
import { Menu, Item, Separator, Submenu, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

class App extends React.Component{

constructor(){
 	super();
 	this.state={value:'Hello World'};
 	this.handleChange=this.handleChange.bind(this);
 	this.clickChange=this.clickChange.bind(this);
 }

handleChange(event){
 	this.setState({value:event.target.value})
 }


clickChange({event,props}){
 	this.setState({value:props.value})
 }


render(){ 
	return(
    <div>
        <MenuProvider id="menu_id" style={{ border: '1px solid purple', display: 'inline-block' }}>
           <input type="string" value={this.state.value} onChange={this.handleChange} />
        </MenuProvider>
        <Menu id='menu_id'>
        <Item onClick={this.clickChange} data={{value:'Hello'}}>Hello</Item>
        <Item onClick={this.clickChange} data={{value:'World'}}>World</Item>
        <Item onClick={this.clickChange} data={{value:'Success'}}>Succes</Item>
        </Menu>
    </div>
	)}
}

export default App