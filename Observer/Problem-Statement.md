# Observer Pattern

## Requirement

The client requested a **Weather Monitoring System** that collects weather data from sensors and displays it on multiple display devices.

Whenever the weather measurements (such as **temperature**, **humidity**, and **pressure**) change, all registered display devices should automatically receive the latest data and update their information in real time.

Additionally, the client wanted the flexibility to add or remove display devices without modifying the weather station's implementation.

### Example Scenarios

- A **Current Conditions Display** shows the latest temperature and humidity.
- A **Forecast Display** predicts future weather based on pressure changes.
- A **Statistics Display** calculates average, minimum, and maximum temperature.
- New display devices can be added later without changing the `WeatherStation` class.

Using direct communication between the `WeatherStation` and every display would tightly couple the classes, making the system difficult to extend and maintain.

---

# Why Observer Pattern?

The **Observer Pattern** is a **behavioral design pattern** that defines a **one-to-many dependency** between objects. When the state of one object (the **Subject**) changes, all of its dependent objects (the **Observers**) are automatically notified and updated.

Instead of the `WeatherStation` directly managing each display's update logic, it simply maintains a list of registered observers and notifies them whenever new weather measurements are available.

Each display independently decides how to process and present the received data.

This approach promotes **loose coupling** because the `WeatherStation` depends only on the `Observer` interface rather than concrete display implementations.

---

# Benefits

- Supports dynamic registration and removal of observers.
- Promotes loose coupling between the Subject and Observers.
- Allows new display devices to be added without modifying existing code.
- Follows the **Open-Closed Principle (OCP)**.
- Simplifies event-driven communication.
- Improves maintainability, scalability, and extensibility.

---

# Pattern Structure

```text
                WeatherStation (Subject)
                        |
          ---------------------------------
          |               |               |
 CurrentCondition   ForecastDisplay   StatisticsDisplay
      (Observer)       (Observer)         (Observer)
```

---

# Learning Objectives

This implementation demonstrates:

- Observer Pattern
- One-to-Many Relationship
- Loose Coupling
- Publish-Subscribe Communication
- Event-Driven Design
- Open-Closed Principle (OCP)
- Programming to Interfaces

---

# Real-World Examples

- YouTube notifications (Channel → Subscribers)
- Weather monitoring systems
- Stock market price updates
- News publishing platforms
- Event handling in GUI frameworks
- Node.js `EventEmitter`
- React state updates and subscriptions

---

# Reference

This implementation is based on the **Observer Pattern** explained in the book:

> **Head First Design Patterns**  
> *Eric Freeman & Elisabeth Robson*

The Weather Station example from the book demonstrates how the Observer Pattern enables one object to notify multiple dependent objects automatically while keeping the system loosely coupled and easy to extend.