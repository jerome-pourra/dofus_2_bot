import { Changeorient } from "./Changeorient";

export class Commands {

    public static readonly CHAT_PREFIX: string = "!";

    public changeorient: Changeorient;

    constructor() {
        this.changeorient = new Changeorient();
    }

    public process(message: string): void {

        const parts = this.splitCommand(message);
        const { command, args } = this.parseCommand(parts);

        switch (command) {
            case "changeorient":
                this.changeorient.toogle();
                break;
            default:
                console.error("Command name " + command + " not found");
                break;
        }

    }

    public isChatCommand(content: string): boolean {
        return content.startsWith(Commands.CHAT_PREFIX);
    }

    private splitCommand(message: string): Array<string> {
        const command = message.substring(Commands.CHAT_PREFIX.length);
        const parts = command.split(" ");
        return parts;
    }

    private parseCommand(parts: Array<string>): { command: string, args: Array<string> } {
        const command = parts.shift();
        return {
            command: command,
            args: parts
        };
    }

}