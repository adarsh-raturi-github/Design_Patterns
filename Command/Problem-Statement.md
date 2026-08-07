# Command Pattern

## Requirement

The client requested the development of a **Universal Smart Home Remote Control** capable of operating different smart devices from various manufacturers, such as lights, ceiling fans, garage doors, and stereo systems.

The remote should be flexible enough to support new devices and operations without requiring modifications to its own implementation. Additionally, the client requested advanced features such as **Undo**, **Macro Commands**, and customizable button assignments.

### Example Scenarios

- A button can be configured to turn on a **Hitachi Light**.
- Another button can turn off a **Havells Ceiling Fan**.
- A stereo button should turn on the stereo, switch to CD mode, and set the desired volume.
- The **Undo** button should reverse the last executed operation.
- A **Party Mode** button should execute multiple commands, such as turning on lights, starting the stereo, and setting the fan to high speed, with a single button press.
- New smart devices should be supported by simply creating new command classes without modifying the remote control.

If the remote directly invoked methods on every device, it would become tightly coupled to all device implementations. Every new device or feature would require changes to the remote, making the system difficult to maintain and extend.

---

# Why Command Pattern?

The **Command Pattern** is a **behavioral design pattern** that encapsulates a request as an object, allowing clients to parameterize objects with different requests, queue or log requests, and support undoable operations.

Instead of allowing the remote control (Invoker) to directly call methods on devices (Receivers), each request is encapsulated inside a **Command** object. The command stores everything required to perform the operation, including:

- Receiver
- Action (method to invoke)
- Required parameters (if any)

The remote control interacts only with the `Command` interface by invoking the `execute()` method, remaining completely independent of the underlying device implementations.

This approach significantly reduces coupling and makes the system highly extensible.

---

# Benefits

- Decouples the Invoker from the Receiver.
- Encapsulates requests as reusable objects.
- Supports dynamic button configuration.
- Easily adds new commands without modifying existing code.
- Supports **Undo** and **Redo** functionality.
- Enables **Macro Commands** (execute multiple commands together).
- Supports request queuing, scheduling, and logging.
- Follows the **Open-Closed Principle (OCP)**.

---

# Pattern Structure

```text
                 Client
                    │
                    ▼
          RemoteControl (Invoker)
                    │
                    ▼
             Command Interface
          execute() / undo()
                    ▲
     ┌──────────────┼──────────────┐
     │              │              │
LightOnCommand  FanHighCommand  StereoOnCommand
     │              │              │
     ▼              ▼              ▼
 HitachiLight   HavellsFan   HarmanStereo
      (Receiver)    (Receiver)     (Receiver)
```

---

# Learning Objectives

This implementation demonstrates:

- Command Pattern
- Encapsulation of Requests
- Loose Coupling
- Invoker, Command, and Receiver Separation
- Undo Operation
- Macro Command
- Null Object Pattern (`NoCommand`)
- Open-Closed Principle (OCP)

---

# Real-World Examples

- Smart Home Remote Controls
- Restaurant Order Management Systems
- GUI Buttons and Menu Actions
- Microsoft Word (Undo/Redo)
- Job Scheduling Systems
- Task Queues
- Message Queues
- Payment Processing Pipelines

---

# Reference

This implementation is based on the **Command Pattern** explained in the book:

> **Head First Design Patterns**  
> _Eric Freeman & Elisabeth Robson_

The Smart Remote Control example demonstrates how requests can be encapsulated as objects, allowing invokers to remain completely independent of the receivers while supporting advanced features such as undo, macro commands, request queuing, and runtime configurability.
