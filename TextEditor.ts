
// command Interface
interface Command{
    execute():void;
    undo():void;
}

// receiver (the actual text editor)

class TextEditor{
    private content:string="";
    append(text:string){
        this.content+=text;
    }

    removeLast(n:number){
        this.content=this.content.slice(0, -n);
    }

    getContent(){
        return this.content;
    }
}

// Concrete Command :Append text
// Ensure there is only one declaration of AppendTextCommand in the file.
class AppendTextCommand implements Command {
    private text: string;
    private editor: TextEditor;

    constructor(editor: TextEditor, text: string) {
        this.editor = editor;
        this.text = text;
    }

    execute() {
        this.editor.append(this.text);
    }
    undo() {
        this.editor.removeLast(this.text.length);
    }
}

// Invoker:Command manager
class CommandManager{
    private history:Command[]=[]
    exexuteCommand(command:Command){
        command.execute();
        this.history.push(command);
    }
    undoLastCommand(){
        const lastCommand=this.history.pop();
        if(lastCommand){
            lastCommand.undo();
        }
    }
}

// client

const editor=new TextEditor();
const commandmanager=new CommandManager();

const command1=new AppendTextCommand(editor, "Hello ");
const command2=new AppendTextCommand(editor, "World");

commandmanager.exexuteCommand(command1);
commandmanager.exexuteCommand(command2);
console.log(editor.getContent());

commandmanager.undoLastCommand();
console.log(editor.getContent());
commandmanager.undoLastCommand();
console .log(editor.getContent());