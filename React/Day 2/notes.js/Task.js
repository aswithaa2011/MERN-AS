//1. what is components?

// A Component is a small reusable piece of UI (User Interface) in React.

// It is like a JavaScript function that returns HTML (JSX).

// React applications are built by combining many components together.

//  Reusability
// Write once → use many times.

// Code Organization
// Code becomes cleaner and easier to manage.

//  Maintainability
// Easy to update or fix specific UI parts.

// Modularity
// Each component works independently.



//2. Types of Components

//functional component 
//class component 

//A Functional Component is a JavaScript function that returns JSX (HTML-like code).
//It is the most commonly used type in modern React.
//Simple and easy to write
//Uses Hooks (useState, useEffect, etc.)
//Mostly used in modern React applications


//A Class Component is created using a JavaScript class and extends React.Component.
//Uses render() method
// Uses this.state

// //Mostly used in older React projects

//4. what is fragment tags in components?
//A Fragment in React is used to group multiple elements without adding an extra DOM node.

//It allows you to return multiple elements from a component without using an extra <div>.
 
//method 1 to use fragment tag

// {/* <>
//    <h1>Hello</h1>
//    <p>Welcome</p>
// </> */}


//method 2
//import React from "react";

// function App(){
//   return(
//     <React.Fragment>
//        <h1>Hello</h1>
//        <p>Welcome</p>
//     </React.Fragment>
//   )
// }