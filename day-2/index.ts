// //rest and spread

// // Destructuring

// const add=(...num:number[])=>{
//     return num;
// }

// const data = [2, 2, 45];
// // const data = add(2, 2, 45);

// const result = add(...data)

// console.log(result);


// const users ={
//     userName: 'dame',
//     email: 'sinan@mail.io',
//     age: 12,
//     phone:{
//         homePhone: 6552595865,
//         officePhone: 49464932
//     }
// }

// const {userName, email, age, phone:{homePhone, officePhone}} = users;

// console.log(userName, email, age,officePhone)


const data:any ="safins";

(data as string).length
console.log( data.length)

interface IProduct{
    productName:string,
    price: number
}


const product:IProduct={
    productName: "HP",
    price:4554566
}