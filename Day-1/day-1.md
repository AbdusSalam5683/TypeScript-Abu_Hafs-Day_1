# TypeScript-Abu_Hafs-Day_1
# TypeScript Practice Tasks 🚀

A beginner-friendly TypeScript practice repository covering the most important TypeScript fundamentals. These exercises are designed to help learners strengthen their understanding of TypeScript before moving to advanced topics like Generics, OOP, Express, React, or Next.js.

---

## 📚 Topics Covered

- Primitive Types
- Non-Primitive Types
- Tuple
- Object
- Literal Types
- Optional Properties
- Functions
- Rest Parameters
- Spread Operator
- Object Destructuring
- Array Destructuring
- Type Alias
- Union Types
- Intersection Types

---

## 📝 Practice Tasks

### 1. Primitive Types

- Declare variables using:
  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`

---

### 2. Non-Primitive Types

- Create string arrays
- Create number arrays
- Create tuples

---

### 3. Object, Literal & Optional Properties

- Create objects
- Use Literal Types
- Use Optional Properties

Example:

```ts
type User = {
  name: string;
  email: string;
  role: "admin" | "user";
  phone?: string;
};
```

---

### 4. Functions

Practice writing:

- Normal Functions
- Arrow Functions
- Functions with Parameters
- Functions with Return Types

---

### 5. Rest & Spread

Practice:

- Merge Arrays
- Merge Objects
- Rest Parameters

---

### 6. Destructuring

- Object Destructuring
- Array Destructuring
- Nested Destructuring

---

### 7. Type Alias

Create reusable custom types.

Example:

```ts
type Product = {
  id: number;
  title: string;
  price: number;
};
```

---

### 8. Union Types

Practice variables and functions using:

```ts
string | number;
```

---

### 9. Intersection Types

Combine multiple types using:

```ts
type Employee = Person & Job;
```

---



# 🚀 1: Fundamentals

## 🛠️ Install & Run

```bash
npm install -g typescript
tsc --init
tsc index.ts
```

---

## 🔹 1-4 Primitive Types

```ts
let username: string = "Hafz";
let age: number = 25;
let isAdmin: boolean = false;
let data: null = null;
let value: undefined = undefined;
```

---

## 🔹 1-5 Non-Primitive Types

```ts
let numbers: number[] = [1, 2, 3];

let user: { name: string; age: number } = {
  name: "Hafz",
  age: 25,
};

let tuple: [string, number] = ["age", 25];
```

---

## 🔹 1-6 Object, Literal & Optional

```ts
type User = {
  name: string;
  age?: number; // optional
};

const u1: User = { name: "Omar" };
```

---

## 🔹 1-7 Function

```ts
function multiply(a: number, b: number): number {
  return a * b;
}
```

---

## 🔹 1-8 Rest & Spread

```ts
function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
```

---

## 🔹 1-9 Destructuring

```ts
const person = { name: "Ali", age: 30 };

const { name, age } = person;

const nums = [10, 20];
const [a, b] = nums;
```

---

## 🔹 1-10 Type Alias

```ts
type ID = string | number;

let userId: ID = "123";
```

---

## 🔹 1-11 Union & Intersection

```ts
type A = { name: string };
type B = { age: number };

type Person = A & B; // intersection

let p: string | number;
p = "hello";
```

---

## 🔹 1-12 Modern Operators

```ts
let value = null ?? "default"; // nullish

let result = true ? "yes" : "no"; // ternary

let user = { profile: { name: "Hafz" } };
console.log(user?.profile?.name); // optional chaining
```
TypeScript - দিন ১ (আবু হাফস) 🚀
📚 টাইপস্ক্রিপ্ট ফান্ডামেন্টালস - বাংলায় সম্পূর্ণ গাইড
🎯 শুরু করার আগে
টাইপস্ক্রিপ্ট হলো জাভাস্ক্রিপ্টের সুপারসেট। মানে জাভাস্ক্রিপ্টের সব কিছুই টাইপস্ক্রিপ্টে কাজ করে, সাথে যোগ হয়েছে টাইপ সিস্টেম। এটা আমাদের কোড লেখার সময় ভুল ধরতে সাহায্য করে।

ইনস্টলেশন:
bash
npm install -g typescript
tsc --init  # কনফিগ ফাইল তৈরি করবে
tsc index.ts  # টাইপস্ক্রিপ্ট ফাইলকে জাভাস্ক্রিপ্টে কনভার্ট করবে
১. প্রিমিটিভ টাইপস (Primitive Types) 📝
প্রিমিটিভ টাইপস হলো বেসিক ডেটা টাইপ। এগুলো হলো:

১.১ স্ট্রিং (String)
ts
let username: string = "হাফিজ";  // টেক্সট বা লেখা
let message: string = 'হ্যালো ওয়ার্ল্ড';
let greeting: string = `আমার নাম ${username}`;  // টেমপ্লেট স্ট্রিং
১.২ নাম্বার (Number)
ts
let age: number = 25;  // পূর্ণ সংখ্যা
let price: number = 99.99;  // দশমিক সংখ্যা
let negative: number = -10;  // ঋণাত্মক সংখ্যা
১.৩ বুলিয়ান (Boolean)
ts
let isAdmin: boolean = true;  // সত্য
let isLoggedIn: boolean = false;  // মিথ্যা
let isActive: boolean = true;
১.৪ নাল (Null) ও আন্ডিফাইনড (Undefined)
ts
let data: null = null;  // intentional absence (জানুশুধু খালি)
let value: undefined = undefined;  // value not assigned (মান দেওয়া হয়নি)

// বাস্তব উদাহরণ:
let userData: string | null = null;  // পরে ডেটা আসবে
let tempValue: number | undefined;  // এখনো মান সেট করা হয়নি
২. নন-প্রিমিটিভ টাইপস (Non-Primitive Types) 📦
২.১ অ্যারে (Array)
ts
// স্ট্রিং অ্যারে
let names: string[] = ["রাফি", "সুমন", "তুহিন"];
let fruits: Array<string> = ["আপেল", "কলা", "আম"];

// নাম্বার অ্যারে
let scores: number[] = [85, 92, 78, 90];
let temperatures: Array<number> = [32.5, 28.3, 30.1];

// মিক্সড অ্যারে (বিভিন্ন টাইপ)
let mixed: (string | number)[] = ["বয়স", 25, "নাম", "রাফি"];
২.২ টাপল (Tuple)
টাপল হলো ফিক্সড সাইজের অ্যারে যেখানে প্রতিটি পজিশনের টাইপ নির্দিষ্ট থাকে।

ts
// টাপল ডিক্লেয়ারেশন
let person: [string, number, boolean] = ["রাফি", 25, true];
// 0: স্ট্রিং, 1: নাম্বার, 2: বুলিয়ান

let product: [string, number, string] = ["ল্যাপটপ", 65000, "ডেল"];

// ব্যবহার:
let user: [string, number] = ["আহমেদ", 30];
console.log(user[0]);  // "আহমেদ"
console.log(user[1]);  // 30
৩. অবজেক্ট, লিটারেল ও অপশনাল প্রপার্টি 🎯
৩.১ অবজেক্ট (Object)
ts
// সাধারণ অবজেক্ট
let student = {
  name: "রাফি",
  age: 22,
  subject: "কম্পিউটার সায়েন্স"
};

// টাইপ সহ অবজেক্ট
let teacher: { name: string; subject: string; salary: number } = {
  name: "মি. হাসান",
  subject: "গণিত",
  salary: 50000
};
৩.২ লিটারেল টাইপস (Literal Types)
নির্দিষ্ট মানগুলোর জন্য টাইপ:

ts
// লিটারেল টাইপ
let direction: "উত্তর" | "দক্ষিণ" | "পূর্ব" | "পশ্চিম";
direction = "উত্তর";  // ঠিক আছে
// direction = "উপর";  // ERROR! শুধু নির্দিষ্ট মানগুলোই অনুমোদিত

let response: "সফল" | "ব্যর্থ" = "সফল";
let statusCode: 200 | 404 | 500 = 200;
৩.৩ অপশনাল প্রপার্টি (Optional Properties)
? চিহ্ন দিয়ে বুঝানো হয় যে প্রপার্টি থাকলেও হবে, না থাকলেও হবে।

ts
type User = {
  name: string;
  email: string;
  role: "admin" | "user";
  phone?: string;  // অপশনাল - থাকতে পারে বা নাও থাকতে পারে
  age?: number;    // অপশনাল
};

// ব্যবহার:
const user1: User = {
  name: "রাফি",
  email: "rafi@email.com",
  role: "admin",
  phone: "01712345678"  // আছে
};

const user2: User = {
  name: "সুমন",
  email: "sumon@email.com",
  role: "user"
  // phone নেই, কিন্তু এটা ভ্যালিড
};
৪. ফাংশন (Functions) 🔧
৪.১ সাধারণ ফাংশন (Normal Function)
ts
// প্যারামিটার ও রিটার্ন টাইপ সহ
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `হ্যালো ${name}!`;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

// ব্যবহার:
console.log(add(5, 3));  // 8
console.log(greet("রাফি"));  // হ্যালো রাফি!
console.log(isEven(4));  // true
৪.২ অ্যারো ফাংশন (Arrow Function)
ts
// অ্যারো ফাংশন
const multiply = (a: number, b: number): number => a * b;

const sayHello = (name: string): void => {
  console.log(`হ্যালো ${name}!`);
};

const getLength = (text: string): number => text.length;

// ব্যবহার:
console.log(multiply(4, 5));  // 20
sayHello("সুমন");  // হ্যালো সুমন!
console.log(getLength("টাইপস্ক্রিপ্ট"));  // ১২
৪.৩ ভয়েড (Void) রিটার্ন
ফাংশন যখন কিছু রিটার্ন করে না:

ts
function logMessage(message: string): void {
  console.log(message);
  // কিছু রিটার্ন করে না
}

function showError(error: string): void {
  console.error(`ত্রুটি: ${error}`);
}
৪.৪ ডিফল্ট প্যারামিটার (Default Parameters)
ts
function greetUser(name: string, greeting: string = "হ্যালো"): string {
  return `${greeting} ${name}!`;
}

console.log(greetUser("রাফি"));  // হ্যালো রাফি!
console.log(greetUser("সুমন", "স্বাগতম"));  // স্বাগতম সুমন!
৫. রেস্ট ও স্প্রেড অপারেটর (...) 🔄
৫.১ রেস্ট প্যারামিটার (Rest Parameters)
অনির্দিষ্ট সংখ্যক প্যারামিটার নেওয়ার জন্য:

ts
// সকল নাম্বারের যোগফল
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3));  // 6
console.log(sumAll(10, 20, 30, 40));  // 100

// সকল নাম্বারের গড়
function average(...nums: number[]): number {
  if (nums.length === 0) return 0;
  const sum = nums.reduce((acc, n) => acc + n, 0);
  return sum / nums.length;
}

console.log(average(10, 20, 30));  // 20
৫.২ স্প্রেড অপারেটর (Spread Operator)
অ্যারে বা অবজেক্ট কপি বা মার্জ করার জন্য:

ts
// অ্যারে কপি করা
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5];  // [1, 2, 3, 4, 5]

console.log(numbers2);

// অ্যারে মার্জ করা
const fruits1 = ["আপেল", "কলা"];
const fruits2 = ["আম", "জাম্বুরা"];
const allFruits = [...fruits1, ...fruits2];
console.log(allFruits);  // ["আপেল", "কলা", "আম", "জাম্বুরা"]

// অবজেক্ট কপি
const user = { name: "রাফি", age: 25 };
const userCopy = { ...user, city: "ঢাকা" };
console.log(userCopy);  // { name: "রাফি", age: 25, city: "ঢাকা" }

// অবজেক্ট মার্জ
const address = { city: "ঢাকা", country: "বাংলাদেশ" };
const fullProfile = { ...user, ...address };
console.log(fullProfile);  // { name: "রাফি", age: 25, city: "ঢাকা", country: "বাংলাদেশ" }
৬. ডেস্ট্রাকচারিং (Destructuring) 📦
৬.১ অবজেক্ট ডেস্ট্রাকচারিং (Object Destructuring)
ts
const person = {
  name: "রাফি",
  age: 25,
  job: "ডেভেলপার",
  address: {
    city: "ঢাকা",
    country: "বাংলাদেশ"
  }
};

// বেসিক ডেস্ট্রাকচারিং
const { name, age } = person;
console.log(name);  // "রাফি"
console.log(age);   // 25

// অ্যালিয়াস (নতুন নাম দেওয়া)
const { name: userName, job: profession } = person;
console.log(userName);  // "রাফি"
console.log(profession); // "ডেভেলপার"

// নেস্টেড ডেস্ট্রাকচারিং
const { address: { city, country } } = person;
console.log(city);    // "ঢাকা"
console.log(country); // "বাংলাদেশ"

// ফাংশন প্যারামিটারে ডেস্ট্রাকচারিং
function displayUser({ name, age }: { name: string; age: number }): void {
  console.log(`${name} এর বয়স ${age} বছর`);
}

displayUser(person);  // রাফি এর বয়স ২৫ বছর
৬.২ অ্যারে ডেস্ট্রাকচারিং (Array Destructuring)
ts
const colors = ["লাল", "নীল", "সবুজ", "হলুদ"];

// বেসিক ডেস্ট্রাকচারিং
const [first, second] = colors;
console.log(first);   // "লাল"
console.log(second);  // "নীল"

// কিছু স্কিপ করা
const [, , third] = colors;
console.log(third);   // "সবুজ"

// রেস্ট অপারেটর দিয়ে বাকি উপাদান
const [primary, ...others] = colors;
console.log(primary);  // "লাল"
console.log(others);   // ["নীল", "সবুজ", "হলুদ"]

// ফাংশন রিটার্নে ডেস্ট্রাকচারিং
function getCoordinates(): [number, number] {
  return [23.8103, 90.4125];
}

const [lat, lon] = getCoordinates();
console.log(`অক্ষাংশ: ${lat}, দ্রাঘিমাংশ: ${lon}`);
৭. টাইপ এলিয়াস (Type Alias) 📌
টাইপ এলিয়াস দিয়ে কাস্টম টাইপ তৈরি করা যায় যা বারবার ব্যবহার করা যায়।

ts
// প্রোডাক্ট টাইপ
type Product = {
  id: number;
  title: string;
  price: number;
  category: "ইলেকট্রনিক্স" | "পোশাক" | "খাবার";
  inStock: boolean;
};

// ব্যবহার:
const laptop: Product = {
  id: 1,
  title: "ডেল ল্যাপটপ",
  price: 65000,
  category: "ইলেকট্রনিক্স",
  inStock: true
};

const shirt: Product = {
  id: 2,
  title: "টি-শার্ট",
  price: 800,
  category: "পোশাক",
  inStock: false
};

// আইডি টাইপ এলিয়াস
type ID = string | number;
let userId: ID = "abc123";
let productId: ID = 456;

// রেসপন্স টাইপ
type APIResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};

const userResponse: APIResponse<{ name: string; email: string }> = {
  success: true,
  data: { name: "রাফি", email: "rafi@email.com" },
  message: "সফলভাবে ডেটা পাওয়া গেছে"
};
৮. ইউনিয়ন টাইপস (Union Types) 🔀
একাধিক টাইপের যে কোনো একটি হতে পারে।

ts
// বেসিক ইউনিয়ন
let input: string | number;
input = "হ্যালো";  // ঠিক আছে
input = 123;       // ঠিক আছে
// input = true;    // ERROR! বুলিয়ান অনুমোদিত নয়

// ইউনিয়ন সহ ফাংশন
function processInput(value: string | number): string {
  if (typeof value === "string") {
    return `টেক্সট: ${value.toUpperCase()}`;
  } else {
    return `সংখ্যা: ${value * 2}`;
  }
}

console.log(processInput("রাফি"));  // টেক্সট: রাফি
console.log(processInput(10));      // সংখ্যা: 20

// ইউনিয়ন টাইপ এলিয়াস
type Status = "সফল" | "ব্যর্থ" | "পেন্ডিং";
let apiStatus: Status = "সফল";
apiStatus = "পেন্ডিং";
// apiStatus = "লোডিং";  // ERROR!

// অ্যারে ইউনিয়ন
let data: (string | number)[] = ["রাফি", 25, "ঢাকা", 30];
৯. ইন্টারসেকশন টাইপস (Intersection Types) 🔗
একাধিক টাইপকে কম্বাইন করা।

ts
// বেসিক ইন্টারসেকশন
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
  salary: number;
};

// দুটি টাইপ কম্বাইন
type EmployeePerson = Person & Employee;

// ব্যবহার:
const employee: EmployeePerson = {
  name: "রাফি",
  age: 25,
  employeeId: "EMP001",
  department: "সফটওয়্যার ডেভেলপমেন্ট",
  salary: 50000
};

// অন্য উদাহরণ
type Address = {
  city: string;
  country: string;
  postalCode: string;
};

type Contact = {
  email: string;
  phone: string;
};

type ContactInfo = Address & Contact;

const myContact: ContactInfo = {
  city: "ঢাকা",
  country: "বাংলাদেশ",
  postalCode: "1212",
  email: "rafi@email.com",
  phone: "01712345678"
};
১০. মডার্ন অপারেটরস (Modern Operators) 🎯
১০.১ নালিশ কোলেসিং (Nullish Coalescing - ??)
নাল বা আন্ডিফাইনড হলে ডিফল্ট মান দেয়।

ts
// null বা undefined চেক করে
let username: string | null = null;
let displayName = username ?? "অতিথি";
console.log(displayName);  // "অতিথি"

let userAge: number | undefined = undefined;
let age = userAge ?? 18;
console.log(age);  // 18

// কিন্তু falsy মান যেমন 0, false, "" এগুলো কাজ করে
let count: number = 0;
let result = count ?? 10;
console.log(result);  // 0 (nullish নয়, কাজ করে)

let isActive: boolean = false;
let status = isActive ?? true;
console.log(status);  // false (nullish নয়, কাজ করে)
১০.২ টার্নারি অপারেটর (Ternary Operator - ? :)
শর্ত অনুযায়ী মান নির্বাচন।

ts
let age2 = 20;
let status2 = age2 >= 18 ? "প্রাপ্তবয়স্ক" : "নাবালক";
console.log(status2);  // "প্রাপ্তবয়স্ক"

// নেস্টেড টার্নারি
let score = 85;
let grade = score >= 80 ? "A+" 
           : score >= 70 ? "A" 
           : score >= 60 ? "B" 
           : "C";
console.log(grade);  // "A+"
১০.৩ অপশনাল চেইনিং (Optional Chaining - ?.)
নেস্টেড অবজেক্টে নিরাপদে প্রপার্টি অ্যাক্সেস।

ts
const userProfile = {
  name: "রাফি",
  address: {
    city: "ঢাকা",
    country: {
      name: "বাংলাদেশ",
      code: "BD"
    }
  }
};

// নিরাপদে অ্যাক্সেস
console.log(userProfile?.address?.city);  // "ঢাকা"
console.log(userProfile?.address?.country?.name);  // "বাংলাদেশ"
console.log(userProfile?.phone);  // undefined (ERROR না)

// ডাইনামিক প্রপার্টি সহ
const userData: any = {
  profile: {
    settings: {
      theme: "ডার্ক"
    }
  }
};

console.log(userData?.profile?.settings?.theme);  // "ডার্ক"
console.log(userData?.profile?.preferences?.lang);  // undefined

// ফাংশন কলেও ব্যবহার করা যায়
const obj = {
  method: () => "হ্যালো"
};
console.log(obj.method?.());  // "হ্যালো"
console.log(obj.nonExistent?.());  // undefined
📝 প্রাকটিক্যাল উদাহরণ - সবকিছু একসাথে
ts
// টাইপ সংজ্ঞা
type User = {
  id: number;
  name: string;
  email: string;
  age?: number;  // অপশনাল
  role: "admin" | "user" | "guest";
};

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

type Order = {
  orderId: string;
  user: User;
  products: Product[];
  total: number;
  status: "পেন্ডিং" | "প্রসেসিং" | "শিপড" | "ডেলিভারড";
};

// ফাংশন
function createOrder(user: User, products: Product[]): Order {
  const total = products.reduce((sum, p) => sum + p.price, 0);
  
  return {
    orderId: `ORD-${Date.now()}`,
    user,
    products,
    total,
    status: "পেন্ডিং"
  };
}

function displayOrderSummary(order: Order): void {
  console.log(`অর্ডার আইডি: ${order.orderId}`);
  console.log(`গ্রাহক: ${order.user.name}`);
  console.log(`মোট: ${order.total} টাকা`);
  console.log(`স্ট্যাটাস: ${order.status}`);
  
  console.log("\nপ্রোডাক্ট সমূহ:");
  order.products.forEach((p, i) => {
    console.log(`${i + 1}. ${p.name} - ${p.price} টাকা`);
  });
}

// ডেটা তৈরি
const user: User = {
  id: 1,
  name: "রাফি আহমেদ",
  email: "rafi@email.com",
  age: 25,
  role: "user"
};

const products: Product[] = [
  { id: 1, name: "ল্যাপটপ", price: 65000, category: "ইলেকট্রনিক্স" },
  { id: 2, name: "মাউস", price: 1200, category: "ইলেকট্রনিক্স" },
  { id: 3, name: "কিবোর্ড", price: 2500, category: "ইলেকট্রনিক্স" }
];

// অর্ডার তৈরি
const order = createOrder(user, products);

// অর্ডার ডিসপ্লে
displayOrderSummary(order);

// ডেস্ট্রাকচারিং
const { orderId, total, status } = order;
console.log(`\nঅর্ডার ${orderId} এর মোট ${total} টাকা, স্ট্যাটাস: ${status}`);

// অ্যারে ডেস্ট্রাকচারিং
const [firstProduct, secondProduct] = products;
console.log(`\nপ্রথম প্রোডাক্ট: ${firstProduct.name}`);
console.log(`দ্বিতীয় প্রোডাক্ট: ${secondProduct.name}`);

// স্প্রেড অপারেটর
const newProduct: Product = {
  id: 4,
  name: "মনিটর",
  price: 15000,
  category: "ইলেকট্রনিক্স"
};

const allProducts = [...products, newProduct];
console.log(`\nমোট প্রোডাক্ট: ${allProducts.length} টি`);
🎯 গুরুত্বপূর্ণ টিপস
টাইপ ইনফারেন্স: TypeScript অনেক সময় নিজে থেকেই টাইপ বুঝে নেয়, তাই সব জায়গায় টাইপ দেয়া বাধ্যতামূলক নয়।

'any' টাইপ ব্যবহার এড়িয়ে চলুন: 'any' টাইপ ব্যবহার করলে TypeScript এর সুবিধা নষ্ট হয়।

strict mode চালু রাখুন: tsconfig.json এ "strict": true রাখুন।

পঠনযোগ্যতা: টাইপ এলিয়াস ব্যবহার করে কোড ক্লিন ও পঠনযোগ্য রাখুন।

অপশনাল চেইনিং: নেস্টেড অবজেক্ট অ্যাক্সেসে সবসময় অপশনাল চেইনিং (?. ) ব্যবহার করুন।

🔥 চ্যালেঞ্জ - নিজে করুন
ts
// 1. একটা Student টাইপ তৈরি করুন যাতে name, age, subjects (array), grade থাকবে
// 2. একটা ফাংশন লিখুন যা Student অ্যারে নিয়ে highestGrade বের করবে
// 3. ইউনিয়ন এবং ইন্টারসেকশন ব্যবহার করে Faculty টাইপ তৈরি করুন
// 4. Destructuring এবং spread ব্যবহার করে পুরাতন অবজেক্ট আপডেট করুন
✅ আজকের সারাংশ
আজ আমরা শিখলাম:

✅ প্রিমিটিভ ও নন-প্রিমিটিভ টাইপস

✅ অবজেক্ট, লিটারেল ও অপশনাল প্রপার্টি

✅ ফাংশনের বিভিন্ন ব্যবহার

✅ রেস্ট ও স্প্রেড অপারেটর

✅ ডেস্ট্রাকচারিং (অবজেক্ট ও অ্যারে)

✅ টাইপ এলিয়াস

✅ ইউনিয়ন ও ইন্টারসেকশন টাইপস

✅ মডার্ন অপারেটরস (??, ?:, ?.)

এই জ্ঞান নিয়ে পরের দিন আমরা Generics, OOP, Express ইত্যাদি শিখব!

Happy Coding! 🚀