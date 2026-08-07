# Adapter Pattern

## Requirement

The client requested the integration of two existing systems that were developed independently. The application expects all bird objects to behave like **Ducks**, but a third-party library provides only **Turkey** implementations.

The client wanted to reuse the existing Turkey implementation without modifying its source code or changing the application's existing Duck-based logic.

### Example Scenarios

- The application expects objects implementing the `Duck` interface.
- A third-party vendor provides a `Turkey` implementation with a different interface.
- A `Turkey` should be usable wherever a `Duck` is expected.
- Existing Duck implementations should continue to work without any modification.
- Future third-party bird implementations should be integrated without changing the client code.

Directly using a `Turkey` object in place of a `Duck` is not possible because both expose different interfaces and behaviors. Modifying either the client or the third-party library would violate the **Open-Closed Principle** and make the system difficult to maintain.

---

# Why Adapter Pattern?

The **Adapter Pattern** is a **structural design pattern** that converts the interface of one class into another interface expected by the client. It allows classes with incompatible interfaces to work together without modifying their existing implementations.

Instead of changing the `Turkey` class or the client code that depends on `Duck`, an **Adapter** is introduced. The adapter implements the `Duck` interface while internally delegating requests to a `Turkey` object.

The adapter translates:

- `quack()` → `gobble()`
- `fly()` → One or multiple calls to `turkey.fly()` (to simulate a duck's longer flight)

This allows the client to interact with a `Turkey` exactly as if it were a `Duck`.

This approach follows the object-oriented design principle:

> **Program to an Interface, Not an Implementation**

and promotes **composition over inheritance** by wrapping the adaptee instead of extending it.

---

# Benefits

- Allows incompatible interfaces to work together.
- Reuses existing or third-party code without modification.
- Decouples the client from concrete implementations.
- Promotes composition over inheritance.
- Follows the **Open-Closed Principle (OCP)**.
- Improves maintainability and extensibility.

---

# Pattern Structure

```text
                    Client
                      │
                      ▼
                 Duck Interface
                      ▲
                      │
              TurkeyAdapter
              (implements Duck)
                      │
                 has-a Turkey
                      │
                      ▼
              Turkey Interface
```

---

# Learning Objectives

This implementation demonstrates:

- Adapter Pattern
- Object Adapter (Composition)
- Interface Translation
- Composition over Inheritance
- Programming to Interfaces
- Open-Closed Principle (OCP)
- Reusing Existing Code

---

# Real-World Examples

- Power Plug Adapters (US plug → European socket)
- USB-C to HDMI Adapter
- Legacy System Integration
- Payment Gateway Wrappers
- Database Driver Adapters
- Third-party API Wrappers
- Logging Framework Adapters
- Cloud Storage Providers (AWS S3, Azure Blob, Google Cloud Storage)

---

# Reference

This implementation is based on the **Adapter Pattern** explained in the book:

> **Head First Design Patterns**  
> _Eric Freeman & Elisabeth Robson_

The Duck and Turkey example demonstrates how the Adapter Pattern enables two incompatible interfaces to work together by introducing an intermediate adapter object, allowing existing code to be reused without modification.
