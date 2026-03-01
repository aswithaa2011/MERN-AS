// Task 1 – Access by Index

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]);

console.log(fruits[3])

console.log(fruits.length)

 //Task 2 – Modify Array Value

 const colors = ["Red", "Green", "Blue"];

 console.log(colors)

 colors[1]="yellow"
 console.log(colors)


 const numbers = [10, 20, 30, 40];

 numbers.forEach(n=>{
    console.log(n)
 })

 numbers.map(n=> {
    console.log(n*n)

    
 })

 
const data = [
  ["Arun", 22],
  ["Ravi", 25],
  ["Kumar", 28]
];

console.log(data[1][1])
console.log(data[2][0])


const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
];


//  Task 6 – Basic Property Access


const student = {
  name: "Arun",
  age: 22,
  course: "MERN"
};


console.log(`Name:  ${student.name} Course: ${student.course}`)


const car = {
  brand: "BMW",
  year: 2020
};


car.year=2024

car.color="black"

console.log(car);


const employee = {
  name: "Ravi",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};


console.log(employee.address.city)
console.log(employee.address.pincode)


const product = {
  name: "Laptop",
  features: ["16GB RAM", "512GB SSD", "i7 Processor"]
};


console.log(product.features[0])

console.log(product.features.length)





const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 }
];

students.forEach(s => {
 if (s.marks > 50) {
console.log(s.name);
  }
});