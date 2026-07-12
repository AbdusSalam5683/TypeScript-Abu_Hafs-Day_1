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
