import { ChatClientMultiMessage } from "../../com/ankamagames/dofus/network/messages/game/chat/ChatClientMultiMessage";
import { GameMapChangeOrientationMessage } from "../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationMessage";
import { INetworkMessage } from "../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkMessageWrapper } from "../../network/packet/NetworkMessageWrapper";
import { ChatClientMultiMessageHandler } from "./ChatClientMultiMessageHandler";
import { GameMapChangeOrientationHandler } from "./GameMapChangeOrientationHandler";

export class NetworkHandler {

    public static process(wrapper: NetworkMessageWrapper): void {

        let message: INetworkMessage = wrapper.networkMessage;
        let networkClass = message.constructor.name;

        switch (networkClass) {
            case "ChatClientMultiMessage":
                // console.log("ChatClientMultiMessage locked");
                // wrapper.locked = true;
                // new ChatClientMultiMessageHandler(message).process();
                break;
            case "GameMapChangeOrientationMessage":
                // new GameMapChangeOrientationHandler(message as GameMapChangeOrientationMessage).process();
                break;
            default:
                // console.log("Unhandled message: " + networkClass);
                break;
        }

    }

}