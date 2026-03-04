// 1. What is React ?

// React is a JavaScript library used to build user interfaces (UI), 
// especially for single-page applications (SPA) where the page updates without reloading.

//It was developed by Meta Platforms (formerly Facebook).
//React's main job is to manage the UI layer of a web application.
//react is fully component based architechture.
//we make large application using reuseable components.
//React is minimaling the DOM process and instant result on your each update. that is the reson for Name Called React.


//2. what is js and what is jsx?

//JS

// JavaScript (JS) is a programming language used to make web pages interactive and dynamic.

// It runs mainly inside the browser and works together with HTML and CSS.

//JSX
// JSX (JavaScript XML) is a syntax used in React that allows writing HTML inside JavaScript code.

//It makes UI code easier to read and write.

//JSX is mainly used in React applications.

//3. what is main.jsx why we use?
//main.jsx is the entry point of a React application.
//It is the file where the React app starts running.
//main.jsx is commonly used when creating React projects with Vite.

//it connects

//1️ React code
//2 The main component (App.jsx)
//3 The HTML file (index.html

//4. what is babel compiler?
//Babel is a JavaScript compiler that converts modern JavaScript code into older JavaScript versions so that all browsers can understand it.

//It is mainly used in modern frameworks like React applications.

//Another important use of Babel is converting JSX into normal JavaScript.

//what is Real dom ?

//The Real DOM (Document Object Model) is the actual structure of HTML elements created by the browser when a webpage loads.

//It represents the webpage as a tree structure of objects that JavaScript can access and modify.

// //Document
//    |
//   html
//    |
//   body
//    |
//   div
//   /   \
// h1     p

// Updating the real DOM is slow because:

// Every change causes re-rendering

// The browser must recalculate layout

// Large applications cause performance issues

// What is Virtual DOM?

// The Virtual DOM is a lightweight copy of the real DOM stored in memory used by React.

// Instead of updating the real DOM directly, React:

// 1️ Updates the Virtual DOM
// 2️ Compares it with the previous Virtual DOM
// 3️ Updates only the changed elements in the real DOM

// This process is called Reconciliation.


//6. what is export default and named exports 

// export default

// A default export allows you to export one main value from a file.

// Each file can have only one default export.

//function App() {
//   return <h1>Hello React</h1>;
// }

// export default App;


//  Only one default export per file
//  Imported without curly braces {}
// Can be renamed while importing

//2️ Named Export

// A named export allows you to export multiple values from the same file.

// Each exported item has its own name

// export const name = "John";

// export const age = 25;

// export function greet(){
//    return "Hello";
//}

//import { name, age, greet } from "./file";

//7. how you import the export default ?

//export default App;