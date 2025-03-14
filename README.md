  
  
# Command Design Pattern Example

This project demonstrates the Command Design Pattern using JavaScript. The Command Design Pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation allows you to parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.

## Components

### Command Interface
- **Command**: An interface with `execute` and `undo` methods that concrete command classes must implement.

### Receiver
- **Light**: The class that performs the actual work. It has methods `turnOn` and `turnOff` to switch the light on and off.

### Concrete Commands
- **TurnOnLightCommand**: A command that turns the light on by calling the `turnOn` method on the `Light` receiver.
- **TurnOffLightCommand**: A command that turns the light off by calling the `turnOff` method on the `Light` receiver.

### Invoker
- **RemoteController**: The class that holds a command and can execute or undo it. It has methods `setCommand`, `buttonPressed`, and `undoPressed`.

### Client Code
The client code creates instances of the `Light`, `TurnOnLightCommand`, and `TurnOffLightCommand` classes. It then uses the `RemoteController` to execute and undo commands.

## Usage

1. **Create a Receiver**: Instantiate the `Light` class.
2. **Create Concrete Commands**: Instantiate `TurnOnLightCommand` and `TurnOffLightCommand` with the `Light` instance.
3. **Create an Invoker**: Instantiate the `RemoteController`.
4. **Set and Execute Commands**:
   - Use `setCommand` to set the current command in the `RemoteController`.
   - Use `buttonPressed` to execute the command.
   - Use `undoPressed` to undo the command.

## Example

```javascript
const light = new Light();
const turnOnLightCommand = new TurnOnLightCommand(light);
const turnOffLightCommand = new TurnOffLightCommand(light);

const remoteController = new RemoteController();
remoteController.setCommand(turnOnLightCommand);
remoteController.buttonPressed(); // Output: "light is On"
remoteController.undoPressed();   // Output: "light is off"

remoteController.setCommand(turnOffLightCommand);
remoteController.buttonPressed(); // Output: "light is off"
remoteController.undoPressed();   // Output: "light is On"
```

This example illustrates how the Command Design Pattern can be used to encapsulate requests as objects, allowing for parameterization and undo functionality.

## Benefits

- **Decoupling**: The pattern decouples the object that invokes the operation from the one that knows how to perform it.
- **Extensibility**: You can add new commands without changing existing code.
- **Composite Commands**: You can create composite commands (macros) by combining multiple commands.
- **Undo/Redo**: The pattern makes it easier to implement undo and redo functionality.
