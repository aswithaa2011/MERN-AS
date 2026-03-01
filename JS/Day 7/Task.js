//Create a function createProfile(user).

// Accept an object as parameter.

// Destructure name, age, and role.

// If role is not provided, default it to "User".

// Return a formatted string using template literals.

// function createProfile({name,age ,role="user"}){
//     return `Name ${name} Age ${age} role ${role}`
// }

// const user1={
//     name:"aswitha"
//     ,age:23,
//     role:"student"
// }

// const user2={
//     name:"janu",
//     age:24
// }

// console.log(createProfile(user1));
// console.log(createProfile(user2));

// Create a function calculateTotal(discount, ...prices).

// Requirements:
// Use rest operator to collect prices.

// Use reduce to calculate total.

// Apply discount percentage.

// Return final amount.

// Use arrow function only.


function calculateTotal(discount,...prices){
 

    const total=prices.reduce((sum,cur)=>sum+cur,0);
   
 const discountPrice=total*(1-discount/100)

    return discountPrice;
    

}

console.log(calculateTotal(10, 20000, 90000));

