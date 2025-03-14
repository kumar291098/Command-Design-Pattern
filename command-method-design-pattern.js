// command Interface
class Command{
    execute(){}
    undo(){}
}
// create receiver
class Light{
    turnOn(){
        console.log("light is On")
    }
    turnOff(){
        console.log("light is off")
    }
}

// Import Concrete Command
class TurnOnLightCommand extends Command{
    constructor(light){
        super();
        this.light=light;
    }
    execute(){
        this.light.turnOn();
    }
    undo(){
        this.light.turnOff();
    }
}

class TurnOffLightCommand extends Command{
    constructor(light){
        super();
        this.light=light;
    }
    execute(){
        this.light.turnOff();
    }
    undo(){
        this.light.turnOn();
    }
}


// create invoker
class RemoteController{
    constructor(){
        this.command=null;
    }
    setCommand(command){
        this.command=command;
    }
    buttonPressed(){
        this.command.execute();
    }
    undoPressed(){
        this.command.undo();
    }
}

// client code
const light=new Light();
const turnOnLightCommand=new TurnOnLightCommand(light);
const turnOffLightCommand=new TurnOffLightCommand(light);

const remoteController=new RemoteController();
remoteController.setCommand(turnOnLightCommand);
remoteController.buttonPressed();
remoteController.undoPressed();

remoteController.setCommand(turnOffLightCommand);
remoteController.buttonPressed();
remoteController.undoPressed();