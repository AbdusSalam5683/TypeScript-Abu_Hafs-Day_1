// let  userName = "salam";
//  userName =12;


//  let age = 20;
//  age = "twenty";

//  let isStudent = true;
//  isStudent = 21;

 let data: string[] | null = null;
 data = ["Hello"];

 let phone: number | undefined = undefined;
 phone = 1234567890;


 const add =(x: number, y: number): number => {
    return x + y;
     // This will cause a TypeScript error because the return type is specified as number   
 }


 let data1: unknown = "Hello"; 
 // unknown type can hold any value, but we need to check its type before using it

 if (typeof data1 === "string") {
     console.log(data1.toUpperCase());
 }


// ? conditional operator tarnary operator

let user1 ={profile: {name: "John", age: 30}};
let userName1: string = user1.profile?.name ?? "Guest";
console.log(userName1); // Output: "John"   


 let age: number = 20;
 let isAdult: boolean = age >= 18 ? true : false;
 console.log(isAdult); // Output: true

 //?? nullish coalescing operator
 let userInput: string | null = null;
 let defaultValue: string = "Default Value";
 let result: string = userInput ?? defaultValue;
 console.log(result); // Output: "Default Value"

 //? optional chaining operator
 interface User {
    name: string;
    email?: string; // Optional property
    }

    
// non-primitive data types

const user:{
    name: string;
    email: string;
    phone: number;
    age: number;

} = {
    name: "John Doe",
    email: "john.doe@example.com",  
    phone: 1234567890,
    age: 30, // This will cause a TypeScript error because 'age' is not defined in the type 


};