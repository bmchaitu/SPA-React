import React from 'react';

const elem = <div />;
const element =  <Welcome name="Chaitanya" />;
 
 //Props are the Object parameters sent to User-defined Component
const fun = (props) => {
		return(
			<div>
				<h1>Hello World {props.name}</h1>
			</div>
			)
}


//Pure functions vs Impure functions
//Pure functions: Functions whose input values are not tend to change
//Impure functions:Functions whose input wvalues are tend to change.


//Pure function
function addThem(a,b){
	return a+b;
}


//Impure function
function deductBalance(amount,account){
	return account-amount;
}

