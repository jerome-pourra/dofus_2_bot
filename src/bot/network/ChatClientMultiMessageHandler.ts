import { ChatClientMultiMessage } from "../../com/ankamagames/dofus/network/messages/game/chat/ChatClientMultiMessage";
import { ChatServerMessage } from "../../com/ankamagames/dofus/network/messages/game/chat/ChatServerMessage";import { GameMapChangeOrientationMessage } from "../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationMessage";
import { GameMapChangeOrientationRequestMessage } from "../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationRequestMessage";
import { ActorOrientation } from "../../com/ankamagames/dofus/network/types/game/context/ActorOrientation";
import { CustomDataWrapper } from "../../com/ankamagames/jerakine/network/CustomDataWrapper";
import { AnkSocketEndpoint } from "../../network/AnkSocket";
import { ConnectionHandler } from "../../network/ConnectionHandler";
import { PacketHandler } from "../../network/packet/PacketHandler";

export class ChatClientMultiMessageHandler {

    private _message: ChatClientMultiMessage;

    constructor(message: ChatClientMultiMessage) {
        this._message = message;
    }

    public process() {
        if (this.isCommand()) {
            console.log("Command detected: " + this._message.content);
            this.executeCommand();
        }
    }

    private isCommand(): boolean {
        return this._message.content.startsWith("!");
    }

    private splitCommand(): string[] {
        const command = this._message.content.substring(1);
        const parts = command.split(" ");
        return parts;
    }

    private parseCommand(): { command: string, args: string[] } {
        const parts = this.splitCommand();
        const command = parts.shift();
        return {
            command: command,
            args: parts
        };
    }

    private executeCommand() {
        const { command, args } = this.parseCommand();
        switch (command) {

            case "me": 

                let data = new CustomDataWrapper();
                let message = new ChatServerMessage();
                message.initChatServerMessage(0, "Hello, World!", 1722956526, "mkxriv6x", 811518853413, "Fleurentia", "", 170037941);
                message.pack(data);

                console.log(data.buffer);
                // console.log(ConnectionHandler.getClient().send());
                
                // ConnectionHandler.getClient().getRemoteAddress();

                break;

            case "co":

            // GameMapChangeOrientationMessage {
            //     _instance_id: 194,
            //     orientation: ActorOrientation { id: 841220882725, direction: 0 }
            //   }

                let orientation = parseInt(args[0]);

                if (orientation < 0 || orientation > 7) {
                    console.warn("Invalid orientation: " + orientation);
                    return;
                }

                // let gmcorm = new GameMapChangeOrientationMessage();
                // gmcorm.initGameMapChangeOrientationMessage(new ActorOrientation().initActorOrientation(841220882725, 3));

                // let result = new CustomDataWrapper();
                // gmcorm.pack(result);
                // console.log("Builded: " + result.buffer.toString("hex"));

                // let buffer = new PacketHandler().acquisition(result.buffer, AnkSocketEndpoint.CLIENT);
                // console.log("Decoded: " + buffer[0].toString("hex"));

                let gmcorm = new GameMapChangeOrientationRequestMessage();
                gmcorm.initGameMapChangeOrientationRequestMessage(orientation);

                // console.log(gmcorm);

                let result = new CustomDataWrapper();
                gmcorm.pack(result);
                ConnectionHandler.getServer().send(result.buffer);
                // console.log(result.buffer);

                // let buffer = new PacketHandler().acquisition(result.buffer, AnkSocketEndpoint.SERVER);
                // console.log(buffer);

                break;
            default:
                // console.warn("Unknown command: " + command);
                break;
        }
    }

}