// //rest and spread

// // Destructuring

// const add=(...num:number[])=>{
//     return num;
// }

// const data = [2, 2, 45];
// // const data = add(2, 2, 45);

// const result = add(...data)

// console.log(result);


const users ={
    userName: 'sinan',
    email: 'sinan@mail.io',
    age: 12,
    phone:{
        homePhone: 6552595865,
        officePhone: 49464932
    }
}

const {userName, email, age, phone:{homePhone, officePhone}} = users;

console.log(userName, email, age,officePhone)