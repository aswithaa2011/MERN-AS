
//1. Show 3 examples where implicit coercion gives unexpected results. Explain why.

if(0==false){
    console.log(true);
    
}
// 0 is a number , false is boolean ..both are not equal , js converting false into a number value 0 

let b=5+"30"

console.log(b)

// 5 is number , "30" is a string it converts 5 has a string and concat 

let c= 5*"30"

console.log(c)

// js convert string 30 into a number automatically and return the multiple of both the number ,
//  implicit conversion performed here

if(null==undefined){
    console.log(true)
}

//null is a different datatype and undefined is different ,
//  null is defined by us where as undefined is returned by js but implicitly converts eachother and returns true 
//if we use === it returns false 


// 2.Write a function calculateTotal(price, qty) where inputs are strings. Convert them explicitly before calculation.

const calculateTotal=()=>{
    const price="30000"
     const quantity="3"
       const totalPrice=Number(price)*Number(quantity)

        return totalPrice
}


console.log(calculateTotal());


// 3. Demonstrate difference between == and === using 5 comparison examples.

console.log(10=="10")//true
console.log(10==="10")//false

console.log(0==false)//true
console.log(0===false)//false

console.log(""==false)//true
console.log(""===false)//false

console.log(null==undefined)//true
console.log(null===undefined)//false

console.log([] == 0);
console.log([] === 0);

//Create a function that converts any input to Boolean explicitly and returns whether it is truthy or falsy.

function checkValue(value){
    return Boolean(value)? "truthy value":"falsy value";

}
console.log(checkValue(-0))