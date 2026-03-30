// import { Component } from "react"

// 1 what is class component 
// A Class Component is a React component created using an ES6 class that can manage state and lifecycle methods.
// A Class Component is a JavaScript class that returns UI using the render() method.


// 2 How to create Class Component

// class Classname extends Component{
//     render(){
//     return()
//     }
// }


// 3 What is State?

// State is an object that stores data inside a component and can change over time.
// When the state changes, React automatically re-renders (updates) the UI.

// 4 setState()

// setState() is used to update the state of a component.
// When setState() is called, React updates the state and re-renders the component UI.

// this.setState({
//   key: value
// }); 

// 5.Lifecycle methods (Mount / Update / Unmount)

// Lifecycle methods are functions that run automatically when a component is created, updated, or removed from the DOM.
// Phase
// Mounting	Component is created and added to DOM
// Updating	Component re-renders due to state/props change
// Unmounting	Component is removed from DOM


// 6.
// If you change a normal variable instead of state, React will NOT re-render the UI.


// 7.The constructor() is a special method in a React Class Component that is used to initialize state and bind methods when the component is created.

// constructor(props)	Special method of class
// super(props)	Calls parent class constructor
// this.state	Initializes component state

// 8.We use constructor() in React class components to initialize state, bind event methods, and perform initial setup when the component is created.