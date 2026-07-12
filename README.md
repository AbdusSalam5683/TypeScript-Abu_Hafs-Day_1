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
