//1️⃣ Declare three variables using var, let, and const. Store your name, age, and a boolean value. Print them.

// var name="Aswitha";
// const age =23;
// let userLogin=true

// console.log(`name : ${name} age: ${age} Loggedin?: ${userLogin}`);

//2️⃣ Declare a variable without assigning a value. Print it. Then assign null to another variable and print it. What is the difference?

// let a;
//  console.log(a); // undefined -- system generates

//  let b=null;

//  console.log(b);// null - assigned

//3️⃣ Create variables of type: string, number, boolean, bigint, null, undefined. Use typeof and print the result for each.

// let name = "Aswitha";
// let age = 25;
// let login = true;
// let bignum = 123456789012345678901234567890n;
// let value= null;
// let b;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof login);
// console.log(typeof bignum);
// console.log(typeof value);
// console.log(typeof b);

//4️⃣ Create two variables: One storing "10" One storing "hello" Multiply both with 2 separately. What is the output?

// const num="10"

// const msg="hello"
 
// console.log(num * 2 ); //10 -- implicit conversion -- coercion , number automatically converts to 10 
// console.log(msg * 2)// NaN -- cannot convert 


// // 5️⃣ Convert the text student name into:
       
// let studentName;   // camelCase

//  let StudentName;   // PascalCase

//  let student_name     // snake_case

//  let student-name     // kebab-case



//6️⃣ Declare two numbers and perform all Arithmetic operations:


// const a =10, b=20;

// console.log(10+2);
// console.log(10-2);
// console.log(10*2);
// console.log(10%2);
// console.log(10/2);

// 7️⃣ Declare a variable with value 10. Apply:

// +=

// -=

// *=

// /=
// Print the result after each step.

// let a=20;

// a+=10;
// console.log(a);
// a-=10;
// console.log(a);
// a*=10;
// console.log(a);
// a/=10;
// console.log(a);

// 8️⃣ Compare the following and write the output:

// 10 == "10"

// 10 === "10"

// 10 != "10"

// 10 !== "10"


// if(10=="10"){

//     console.log(true);
    
// }
// else
// {
//     console.log(false)
// }
// if(10 === "10"){

//     console.log(true);
    
// }else
// {
//     console.log(false)
// }

// if(10 != "10"){

//     console.log(true);
    
// }
// else
// {
//     console.log(false)
// }

// if(10 !== "10"){

//     console.log(true);
    
// }
// else
// {
//     console.log(false)
// }


// 9️⃣ Create two variables: age and hasID.
// Write a condition to check:
// Eligible if age > 18 AND hasID is true

// Not eligible if age < 18 OR hasID is false




// let age = 20;
// let hasID = true;

// if (age > 18 && hasID === true) {
//   console.log("Eligible");
// } 
// else if (age < 18 || hasID === false) {
//   console.log("Not Eligible");
// }

// var a;
// console.log(a);// undefined 

// a = 5;
// console.log(a); // 5 


// console.log(typeof NaN); // number 
// console.log(typeof null); // object -- js bug