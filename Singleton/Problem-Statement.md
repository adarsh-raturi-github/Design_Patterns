# Singleton Pattern

## Requirement

The client requested a **Database Connection Manager** for an enterprise application where multiple services need to access the same database connection.

Creating a new database connection for every request or service would be expensive and could quickly exhaust database resources. Therefore, the client wanted to ensure that the application creates **only one database connection instance** and shares it across the entire application.

Additionally, the database connection requires an **expensive asynchronous initialization** process, and multiple concurrent requests should not create multiple instances while the initialization is still in progress.

### Example Scenarios

- The **User Service** requests a database connection.
- At the same time, the **Order Service** requests a database connection.
- Simultaneously, the **Payment Service** also requests the same connection.
- Even if all services request the connection concurrently, only **one database instance** should be created.
- Once initialized, all future requests should receive the same shared instance.

Creating multiple database connection objects would lead to unnecessary resource consumption, increased memory usage, inconsistent shared state, and unnecessary initialization overhead.

---

# Why Singleton Pattern?

The **Singleton Pattern** is a **creational design pattern** that ensures a class has **only one instance** and provides a **global point of access** to that instance.

Instead of allowing every module to create its own database connection, the Singleton controls object creation by exposing a static `getInstance()` method. The object is created only when it is requested for the first time (lazy initialization), and the same instance is returned for all subsequent requests.

In this implementation, asynchronous initialization is also handled safely by sharing a single initialization `Promise`, ensuring that concurrent requests wait for the same initialization process instead of creating multiple instances.

---

# Benefits

- Guarantees a single shared instance throughout the application.
- Reduces memory usage by avoiding duplicate objects.
- Prevents multiple expensive database initializations.
- Supports lazy initialization (object is created only when needed).
- Provides a centralized global access point.
- Handles concurrent asynchronous initialization safely.
- Improves resource management and consistency.

---

# Pattern Structure

```text
                  Client
                     │
        ┌────────────┼────────────┐
        │            │            │
 UserService   OrderService   PaymentService
        │            │            │
        └────────────┼────────────┘
                     │
             Singleton.getInstance()
                     │
        ------------------------------
        | instance exists?            |
        |      Yes → Return instance  |
        |      No  → Create instance  |
        ------------------------------
                     │
                     ▼
          DatabaseConnection (Singleton)
```

---

# Learning Objectives

This implementation demonstrates:

- Singleton Pattern
- Lazy Initialization
- Global Access Point
- Private Constructor
- Static Instance
- Controlled Object Creation
- Shared Resource Management
- Safe Asynchronous Initialization

---

# Real-World Examples

- Database Connection Manager
- Logger
- Configuration Manager
- Redis Client
- AWS SDK Client
- Cache Manager
- Express Application Instance

---

# Reference

This implementation is based on the **Singleton Pattern** explained in the book:

> **Head First Design Patterns**  
> _Eric Freeman & Elisabeth Robson_

The Singleton Pattern demonstrates how to ensure that only one instance of a class exists while providing a single global access point. In production systems, it is commonly used for shared resources such as database connections, configuration managers, loggers, and caches where multiple instances would waste resources or cause inconsistent behavior.
