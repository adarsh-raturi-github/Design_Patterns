# Decorator Pattern

## Requirement

The client requested a **Coffee Ordering System** where customers can order different types of beverages and customize them by adding optional condiments.

Each beverage can have zero or more condiments, and customers should be able to combine them in any order. Every condiment should contribute to both the beverage's description and its total cost.

Additionally, the client wanted the flexibility to introduce new beverages or condiments in the future without modifying the existing implementation.

### Example Scenarios

- An **Espresso** can be ordered without any condiments.
- A **House Blend** can be ordered with **Milk** and **Mocha**.
- A customer can order **Dark Roast + Mocha + Mocha + Whip**.
- Multiple condiments of the same type should be supported.
- New condiments such as **Caramel**, **Hazelnut**, or **Soy** should be added without changing existing beverage classes.

Using inheritance to represent every possible beverage and condiment combination would result in a large number of subclasses, making the system difficult to maintain and extend.

---

# Why Decorator Pattern?

The **Decorator Pattern** is a **structural design pattern** that allows additional responsibilities or behaviors to be attached to an object dynamically by wrapping it with decorator objects.

Instead of creating subclasses for every possible beverage-condiment combination, each condiment is implemented as a separate decorator that wraps another `Beverage` object.

Every decorator:

- **IS-A** `Beverage` (through inheritance), allowing it to be used wherever a beverage is expected.
- **HAS-A** `Beverage` (through composition), allowing it to extend the wrapped beverage's behavior.

This approach follows the object-oriented design principle:

> **Favor Composition Over Inheritance**

By combining decorators at runtime, customers can create any beverage configuration without increasing the number of classes.

---

# Benefits

- Eliminates the class explosion problem caused by inheritance.
- Allows responsibilities to be added dynamically at runtime.
- Supports unlimited combinations of condiments.
- Promotes composition over inheritance.
- Follows the **Open-Closed Principle (OCP)** by allowing new decorators without modifying existing classes.
- Improves flexibility, maintainability, and code reusability.

---

# Pattern Structure

```text
                    Beverage
                        ▲
            ------------------------
            |                      |
      Espresso              CondimentDecorator
      HouseBlend                    ▲
      DarkRoast                     |
      Decaf          ----------------------------
                      |            |            |
                    Milk         Mocha        Whip
```

At runtime:

```text
Espresso
    │
Mocha
    │
Milk
    │
Whip
```

or

```text
Whip(
    Milk(
        Mocha(
            Espresso
        )
    )
)
```

---

# Learning Objectives

This implementation demonstrates:

- Decorator Pattern
- Composition over Inheritance
- Dynamic Runtime Behavior Extension
- Object Wrapping
- Open-Closed Principle (OCP)
- Polymorphism using "IS-A"
- Composition using "HAS-A"

---

# Real-World Examples

- Coffee ordering systems (Starbucks)
- Java I/O Streams (`BufferedInputStream`, `BufferedReader`)
- HTTP middleware (Authentication, Logging, Compression)
- Express.js middleware
- Notification systems (Logging, Retry, Encryption)
- Report generation (Watermark, Compression, Password Protection)
- E-commerce orders (Gift Wrap, Insurance, Extended Warranty)

---

# Reference

This implementation is based on the **Decorator Pattern** explained in the book:

> **Head First Design Patterns**  
> *Eric Freeman & Elisabeth Robson*

The coffee shop example from the book demonstrates how the Decorator Pattern enables functionality to be added dynamically through object composition, avoiding the need for a large inheritance hierarchy while keeping the system flexible and extensible.