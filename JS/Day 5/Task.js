// const outer = ()=>{

//   let count = 0;

//   return ()=>{
 
//     // count = count + 1 = 1+1 = 2
//     count++

//     return count

//   }


// }


// const data = outer()


// console.log(data());
// console.log(data());
// console.log(data());

// count = 12



// console.log(count)

// console.log(data());

// //let count =0 is declared inside a function as lexical scope so it can be accessed within the function.
// //count =12 creates new global variable 

// //2 shallow copy 
// // A shallow copy copies only the first level.
// // If the object contains another object inside, it copies the reference, not the actual inner object.
// Returns:


// Shallow Copy Methods in JS

// spread operator {...}
// Object.assign()
// Array.slice()
// [...array]
// Array.from()

// //3 Deep copy

// // A deep copy copies everything including nested objects.
// // It creates completely new memory for all levels.

// Deep copy methods 

// structuredClone(obj)
// JSON.parse(JSON.stringify(obj))

// const copyMethods = [
//   {
//     method: "Spread (...)",
//     returns: "New object / New array",
//     nestedSafe: "No"
//   },
//   {
//     method: "Object.assign()",
//     returns: "New object",
//     nestedSafe: "No"
//   },
//   {
//     method: "Array.slice()",
//     returns: "New array",
//     nestedSafe: "No"
//   },
//   {
//     method: "structuredClone()",
//     returns: "New object / New array",
//     nestedSafe: "Yes"
//   }
// ];

// console.table(copyMethods);

