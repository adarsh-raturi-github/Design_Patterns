# Strategy Pattern

## Requirement

The client requested a children's duck simulation game where different types of ducks (such as **Mallard Duck**, **Rubber Duck**, and **Redhead Duck**) can exhibit different flying and quacking behaviors. Additionally, the client wanted the flexibility to change a duck's behavior dynamically at runtime without modifying the existing duck classes.

### Example Scenarios

- A **Mallard Duck** can fly with wings and quack.
- A **Rubber Duck** cannot fly and squeaks instead of quacking.
- During gameplay, a duck may gain a **rocket-powered flying ability**, requiring its flying behavior to change dynamically at runtime.

Using inheritance alone would result in duplicated code, rigid class hierarchies, and frequent modifications whenever a new behavior is introduced.

---

# Why Strategy Pattern?

The **Strategy Pattern** is a **behavioral design pattern** that defines a family of algorithms (behaviors), encapsulates each algorithm into a separate class, and makes them interchangeable at runtime.

Instead of implementing flying and quacking logic directly inside every `Duck` class, these behaviors are extracted into independent strategy classes such as:

- `FlyWithWings`
- `FlyNoWay`
- `Quack`
- `Squeak`

Each `Duck` object composes the appropriate behavior objects and delegates the work to them. As a result, behaviors can be changed dynamically without modifying the duck itself.

This approach follows the object-oriented design principle:

> **Favor Composition Over Inheritance**

---

# Benefits

- Eliminates duplicated behavior across different duck classes.
- Allows behaviors to be changed dynamically at runtime.
- Makes the system easy to extend by adding new behavior classes.
- Follows the **Open-Closed Principle (OCP)**.
- Reduces coupling between `Duck` and its behaviors.
- Improves maintainability, flexibility, and testability.

---

# Pattern Structure

```text
                Duck (Context)
                     |
        -------------------------
        |                       |
 FlyBehaviour             QuackBehaviour
        |                       |
   ---------------         ----------------
   |             |         |              |
FlyWithWings  FlyNoWay   Quack        Squeak
```

---

# Learning Objectives

This implementation demonstrates:

- Strategy Pattern
- Composition over Inheritance
- Runtime behavior changes
- Delegation
- Open-Closed Principle (OCP)
- Programming to an Interface, not an Implementation

---

# Reference

This implementation is based on the **Strategy Pattern** explained in the book:

> **Head First Design Patterns**  
> *Eric Freeman & Elisabeth Robson*

The book uses the Duck example to demonstrate how composition provides a more flexible and maintainable solution than inheritance for varying behaviors.