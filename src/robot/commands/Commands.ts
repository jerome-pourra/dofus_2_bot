import { ChatServerMessage } from "../../com/ankamagames/dofus/network/messages/game/chat/ChatServerMessage";
import { CustomDataWrapper } from "../../com/ankamagames/jerakine/network/CustomDataWrapper";
import { AnkSocketEndpoint } from "../../network/AnkSocket";
import { Robot } from "../Robot";
import { ChangeorientCommand } from "./ChangeorientCommand";

export class Commands {

    public static readonly CHAT_PREFIX: string = "!";
    public static readonly CHAT_COLOR: string = "#f0dfcd";
    public static readonly CHAT_ON_COLOR: string = "#00ff00";
    public static readonly CHAT_OFF_COLOR: string = "#ff0000";

    public changeorient: ChangeorientCommand;

    constructor() {
        this.changeorient = new ChangeorientCommand();
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

    public printChatCommand(command: string, active: boolean): void {

        let activeMsg = active ? "ON" : "OFF";
        let activeColor = active ? Commands.CHAT_ON_COLOR : Commands.CHAT_OFF_COLOR;
        let activeMsgColor = `<font color='${activeColor}'>${activeMsg}</font>`;
        let contentMessage = `<font color='${Commands.CHAT_COLOR}'><b>[ROBOT]</b> ${command} [<b>${activeMsgColor}</b>]</font>`;

        let output = new CustomDataWrapper();
        let networkMessage = new ChatServerMessage();
        networkMessage.decreaseInstanceId();
        networkMessage.initChatServerMessage(0, contentMessage);
        networkMessage.pack(output);

        Robot.get().send(output.buffer, AnkSocketEndpoint.CLIENT);

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