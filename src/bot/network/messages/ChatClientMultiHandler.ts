import { ChatClientMultiMessage } from "../../../com/ankamagames/dofus/network/messages/game/chat/ChatClientMultiMessage";
import { INetworkMessage } from "../../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { INetworkHandler } from "../INetworkHandler";


export class ChatClientMultiMessageHandler implements INetworkHandler {

    private _wrapper: NetworkMessageWrapper;
    private _message: ChatClientMultiMessage;

    constructor(wrapper: NetworkMessageWrapper) {
        let message: INetworkMessage = wrapper.networkMessage;
        if (!(message instanceof ChatClientMultiMessage)) {
            throw new Error("Invalid message type: " + message.constructor.name);
        }
        this._wrapper = wrapper;
        this._message = message;
    }

    public process(): void {

    }

    // public process(): void {
    //     if (this.isCommand()) {
    //         console.log("Command detected: " + this._message.content);
    //         this.executeCommand();
    //     }
    // }

    // private isCommand(): boolean {
    //     return this._message.content.startsWith("!");
    // }

    // private splitCommand(): string[] {
    //     const command = this._message.content.substring(1);
    //     const parts = command.split(" ");
    //     return parts;
    // }

    // private parseCommand(): { command: string, args: string[] } {
    //     const parts = this.splitCommand();
    //     const command = parts.shift();
    //     return {
    //         command: command,
    //         args: parts
    //     };
    // }

    // private executeCommand() {

    //     const { command, args } = this.parseCommand();

    //     // let output = new CustomDataWrapper();

    //     switch (command) {

    //         case "send": 

    //             // let msg = args[0];
    //             // console.log("Sending message: " + msg);

    //             // <font color='#RRGGBB'>Votre texte ici</font>
    //             // <font size='20'>Texte en taille 20</font>

    //             // <b>Votre texte ici</b>
    //             // <i>Votre texte ici</i>
    //             // <u>Votre texte ici</u>
    //             // <a href='lien'>Votre texte ici</a>
                

    //             // let message = new ChatServerMessage();
    //             // message.initChatServerMessage(0, args.join(" "), 0, "", 0, "", "", 0);
    //             // message.pack(output);
    //             // ConnectionHandler.getClient().send(output.buffer);

    //             break;

    //         case "co":

    //         // GameMapChangeOrientationMessage {
    //         //     _instance_id: 194,
    //         //     orientation: ActorOrientation { id: 841220882725, direction: 0 }
    //         //   }

    //             // let orientation = parseInt(args[0]);

    //             // if (orientation < 0 || orientation > 7) {
    //             //     console.warn("Invalid orientation: " + orientation);
    //             //     return;
    //             // }

    //             // let gmcorm = new GameMapChangeOrientationMessage();
    //             // gmcorm.initGameMapChangeOrientationMessage(new ActorOrientation().initActorOrientation(841220882725, 3));

    //             // let result = new CustomDataWrapper();
    //             // gmcorm.pack(result);
    //             // console.log("Builded: " + result.buffer.toString("hex"));

    //             // let buffer = new PacketHandler().acquisition(result.buffer, AnkSocketEndpoint.CLIENT);
    //             // console.log("Decoded: " + buffer[0].toString("hex"));

    //             // let gmcorm = new GameMapChangeOrientationRequestMessage();
    //             // gmcorm.initGameMapChangeOrientationRequestMessage(orientation);

    //             // console.log(gmcorm);

    //             // let result = new CustomDataWrapper();
    //             // gmcorm.pack(result);
    //             // ConnectionHandler.getServer().send(result.buffer);
    //             // console.log(result.buffer);

    //             // let buffer = new PacketHandler().acquisition(result.buffer, AnkSocketEndpoint.SERVER);
    //             // console.log(buffer);

    //         case "pong":

    //             // let bp = new BasicPongMessage();
    //             // bp.initBasicPongMessage(true);
    //             // bp.pack(output);
    //             // ConnectionHandler.getClient().send(output.buffer);

    //             break;
    //         default:
    //             // console.warn("Unknown command: " + command);
    //             break;
    //     }
    // }

}