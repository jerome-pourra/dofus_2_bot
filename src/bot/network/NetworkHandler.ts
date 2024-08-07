import { ChatClientMultiMessage } from "../../com/ankamagames/dofus/network/messages/game/chat/ChatClientMultiMessage";
import { GameMapChangeOrientationMessage } from "../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationMessage";
import { INetworkMessage } from "../../com/ankamagames/jerakine/network/INetworkMessage";
import { ChatClientMultiMessageHandler } from "./ChatClientMultiMessageHandler";
import { GameMapChangeOrientationHandler } from "./GameMapChangeOrientationHandler";

export class NetworkHandler {

    public static process(message: INetworkMessage) {

        let networkClass = message.constructor.name;

        switch (networkClass) {
            case "ChatClientMultiMessage":
                new ChatClientMultiMessageHandler(message as ChatClientMultiMessage).process();
                break;
            case "GameMapChangeOrientationMessage":
                new GameMapChangeOrientationHandler(message as GameMapChangeOrientationMessage).process();
                break;
            default:
                // console.log("Unhandled message: " + networkClass);
                break;
        }

    }

}