# Facade Pattern

## Requirement

The client requested the development of a **Home Theater Automation System** that integrates multiple entertainment devices, including a DVD player, amplifier, theater lights, screen, and popcorn popper.

Watching a movie requires interacting with several devices in a specific sequence. The client wanted a simplified interface so that users could perform complex operations with a single method call instead of manually coordinating every subsystem.

### Example Scenarios

- A user wants to watch a movie with a single button press.
- The system should automatically:
  - Turn on the popcorn popper.
  - Pop the popcorn.
  - Dim the theater lights.
  - Lower the theater screen.
  - Turn on the amplifier.
  - Configure the amplifier for DVD playback.
  - Enable surround sound.
  - Set the desired volume.
  - Turn on the DVD player.
  - Start playing the selected movie.
- When the movie finishes, the system should:
  - Stop the DVD.
  - Eject the DVD.
  - Turn off the DVD player.
  - Turn off the amplifier.
  - Raise the theater screen.
  - Turn the theater lights back on.
  - Turn off the popcorn popper.
- New clients such as a **Mobile App**, **Web Application**, or **Voice Assistant** should be able to start or end a movie without knowing how the individual devices work.

Without a Facade, every client would need to interact directly with each subsystem, remember the correct sequence of operations, and understand the configuration of every device. This would tightly couple the client to the subsystem, making the application difficult to use, maintain, and extend.

---

# Why Facade Pattern?

The **Facade Pattern** is a **structural design pattern** that provides a **unified, high-level interface** to a complex subsystem. Instead of exposing every subsystem object to the client, the Facade coordinates their interactions and exposes simple business-oriented operations.

Rather than forcing the client to manually control every device, the `HomeTheaterFacade` exposes intuitive methods such as:

- `watchMovie(movie)`
- `endMovie()`

Internally, the Facade handles all communication with the subsystem objects and ensures they are executed in the correct order.

This significantly reduces complexity while keeping the subsystem classes independent and reusable.

---

# Benefits

- Simplifies interaction with complex subsystems.
- Reduces coupling between clients and subsystem classes.
- Provides a single entry point for common business workflows.
- Hides subsystem implementation details.
- Improves readability and maintainability.
- Allows subsystem implementations to evolve without affecting client code.
- Follows the **Principle of Least Knowledge (Law of Demeter)**.

---

# Pattern Structure

```text
                    Client
                      │
                      ▼
             HomeTheaterFacade
                      │
      ┌───────────────┼────────────────────┐
      │               │                    │
 Amplifier       DVD Player        Theater Screen
      │               │                    │
      ├───────────────┴──────────────┐
      │                              │
 Theater Lights               Popcorn Popper
```

---

# Learning Objectives

This implementation demonstrates:

- Facade Pattern
- Simplifying Complex Subsystems
- Business Workflow Encapsulation
- High-Level Abstraction
- Loose Coupling
- Principle of Least Knowledge (Law of Demeter)
- Object Composition
- Clean API Design

---

# Real-World Examples

- Home Theater Automation
- E-commerce Checkout Service
- Banking APIs (`transferMoney()`)
- Hotel Reservation Systems
- Travel Booking Systems
- Operating System APIs
- Payment Gateway Facades
- Cloud SDKs (AWS, Azure, Google Cloud)

---

# Reference

This implementation is based on the **Facade Pattern** explained in the book:

> **Head First Design Patterns**  
> _Eric Freeman & Elisabeth Robson_

The Home Theater example demonstrates how the Facade Pattern provides a simplified interface over a complex subsystem, allowing clients to perform high-level business operations without needing to understand or coordinate the underlying components.
