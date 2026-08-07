# Design Patterns in TypeScript

This repository contains implementations of the most commonly used **Object-Oriented Design Patterns** from the book **Head First Design Patterns**, rewritten from the original Java examples into **TypeScript**.

The primary goal of this repository is to understand the **problem each design pattern solves**, its implementation, and its real-world applications from a software engineering perspective.

Each design pattern includes:

- 📖 A real-world problem statement
- 💻 Complete TypeScript implementation
- 🏗️ Object-Oriented Design explanation
- 📚 Interview-focused notes and definitions
- 🚀 Practical examples demonstrating the pattern

---

## Design Patterns Implemented

- ✅ Strategy Pattern
- ✅ Observer Pattern
- ✅ Decorator Pattern
- ✅ Singleton Pattern
- ✅ Command Pattern

> More design patterns will be added as I continue learning from **Head First Design Patterns**.

---

## Repository Structure

```text
Design_Patterns/
│
├── Strategy/
│   ├── Problem-Statement.md
│   ├── main.ts
│   └── src/
│
├── Observer/
│   ├── Problem-Statement.md
│   ├── main.ts
│   └── src/
│
├── Decorator/
│   ├── Problem-Statement.md
│   ├── main.ts
│   └── src/
│
├── Singleton/
│   ├── Problem-Statement.md
│   ├── main.ts
│   └── src/
│
├── Command/
│   ├── Problem-Statement.md
│   ├── main.ts
│   └── src/
│
└── README.md
```

Each pattern folder contains:

- **Problem-Statement.md** – Explains the business problem, why the pattern is needed, benefits, learning objectives, and real-world use cases.
- **TypeScript Implementation** – Complete implementation adapted from the Java examples in _Head First Design Patterns_.
- **Example Application** – Demonstrates how the pattern works in practice.

---

## Prerequisites

Ensure that **Node.js** is installed on your machine.

Install TypeScript and `ts-node` globally:

```bash
npm install -g typescript
npm install -g ts-node
```

Alternatively, install project dependencies locally:

```bash
npm install
```

---

## Running an Example

Navigate to the desired design pattern directory.

Example:

```bash
cd Strategy
```

Run the example:

```bash
ts-node main.ts
```

Similarly, you can execute any other pattern by navigating to its respective folder.

---

## Learning Objectives

This repository focuses on understanding:

- Object-Oriented Design (OOD)
- SOLID Principles
- Design Patterns
- Composition over Inheritance
- Loose Coupling
- Encapsulation
- Polymorphism
- Software Design Best Practices
- Real-world Design Pattern Applications
- SDE2 Interview Preparation

---

## Reference

All implementations are inspired by the examples presented in:

> **Head First Design Patterns**  
> _Eric Freeman & Elisabeth Robson_

The original Java implementations have been adapted to **TypeScript**, while preserving the core design principles and extending several examples with additional production-oriented features.
