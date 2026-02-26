// // // Create an empty array called cart.
// // // Add 3 product names using push().
// // // Remove the last product using pop().
// // // Print final cart and removed item

// // const cart=[];
// // console.log(cart);


// // cart.push('laptop','mobile','fridge')

// // console.log(cart);


// // const remove=cart.pop()

// // console.log(cart);

// // console.log(remove);




// // // 2️⃣
// // // Create an array [10, 20, 30, 40].
// // // Remove the first element using shift().
// // // Add 5 at the beginning using unshift().

// // const numbers=[10, 20, 30, 40]

// // numbers.shift()
// // numbers.unshift(5)

// // console.log(numbers);

// // // 3️⃣
// // // Create an array of skills.
// // // Check if "React" exists using includes().
// // // If not present, add it.
// // const skills=["js","react","sql"]

// // console.log(skills.includes("react",1))

// // let carts = ["Laptop", "Mobile", "Keyboard", "Mouse", "Monitor"];

// // if(carts.includes("Laptop")){
// //     console.log("laptop index:",carts.indexOf("Laptop"));
    
// // }


// // console.log(carts);


// // // 4️⃣
// // // Given array [1, 2, 3, 4, 5]
// // // Use slice() to create a new array containing only middle 3 elements.


// //  const numbers=[1, 2, 3, 4, 5];
  
// //  const newarr=numbers.slice(1,4)

// //  console.log(newarr);

// //  console.log(numbers);// doesnt affect original array , just etract the values 
 
 

// // 5️⃣
// // Given [1, 2, 3, 4, 5]
// // Use splice() to remove 3 and 4.
// // Then insert 100 and 200 at that position.

// // const numbers=[1, 2, 3, 4, 5];

// // const newarr=numbers.splice(2,2,100,200)

// // console.log(newarr);// returns the removed values

// // console.log(numbers);



// // Combine two arrays [1,2] and [3,4] using concat().

// // const arr1=[1,2]
// // const arr2=[3,4]

// // const combine=arr1.concat(arr2)

// // console.log(combine);

// // 7️⃣
// // Convert ["JS", "React", "Node"] into a single string separated by " - " using join().


// // const skills=["JS", "React", "Node"];


// // const newarr=skills.join("-")

// // console.log(newarr)
// // console.log(skills);// doest change original array 

// // Sort an array of numbers in ascending and descending order properly.


// // let numbers = [10, 5, 100, 25];

// // numbers.sort((a,b)=>a-b)

// // console.log("ascending ",numbers); // modify original array 

// // numbers.sort((a,b)=>b-a)

// // console.log("descending",numbers);


// // 9️⃣
// // Reverse an array without creating a new variable.

// // let numbers = [10, 5, 100, 25];

// // console.log(numbers.reverse());




// // 🔟
// // Find index of a specific value in an array.
// // If not found, print "Not Found".




// // const skills=["JS", "React", "Node"];

// // console.log(skills.indexOf('JS')===0?"found":"not found");


// // console.log(skills.indexOf("JS"));


// //  Higher Order Array Methods Tasks
// // Given [1,2,3,4]
// // Create a new array where each number is multiplied by 5.


// // const numbers=[1,2,3,4];

// // const data=numbers.map(n=>n*5)

// // console.log(data);


// // console.log(numbers);

// //Return a new array containing only names.


// // const user=[
// //  { name: "Sudhan", age: 22 },
// //  { name: "Ravi", age: 25 }
// // ]


// // const names=user.map((u)=>u.name)

// // console.log(names);


// // Given [10, 15, 20, 25, 30]
// // Return only numbers greater than 20.

// // const  numbers=[10, 15, 20, 25, 30];

// // const data=numbers.filter(f=>f>20)

// // console.log(data);




// // From a product array, filter products whose price is above 10000.

// const product=
//    [
//  { name: "Mobile", price: 10000 },
//  { name: "Laptop", price: 50000 },
//  { name: "Headset", price: 2000 }
// ]

// const price=product.filter((p)=>p.price>10000)

// console.log(price)



// const totalPrice=product.reduce((total,p)=>
//     total+p.price
    
// ,0)

// console.log(totalPrice);



// const lowestPrice=product.some(s=>s.price>3000)

// console.log(lowestPrice);


// 2️⃣2️⃣ Student Marks System
// Given student marks array:

// Get all marks above 70.

// Check if all students passed (>= 35).

// Find first failed student.

// Calculate average mark.


// const marks=[34,89,35,90,10,99,22]

// const higherMarks=marks.filter(f=>f>70)
// console.log(higherMarks);


// const allPassCheck=marks.every(e=>e>=35)
// console.log(allPassCheck?"pass":"not all pass")
// const highestMark=marks.find(f=>f<=35)
// console.log(highestMark);


// const total=marks.reduce((sum,mark)=>
//    sum+mark ,0)

// const average=total/marks.length;

// console.log("Average : ",average);


// 2️⃣4️⃣ Group By Age
// From an array of user objects, group users by age using reduce().

// const groupedByAge = users.reduce((acc, user) => {

//   if (!acc[user.age]) {
//     acc[user.age] = [];
//   }

//   acc[user.age].push(user);

//   return acc;

// }, {});

// console.log(groupedByAge);


// flatten Array
// Convert [[1,2], [3,4], [5]] into [1,2,3,4,5] using reduce().

// const numbers=[[1,2], [3,4], [5]];

// const flatten=numbers.reduce((acc,cur)=>

//     acc.concat(cur)
// ,[])

// console.log(flatten);

