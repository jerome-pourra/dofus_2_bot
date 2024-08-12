import { ChatClientMultiMessage } from "../../../com/ankamagames/dofus/network/messages/game/chat/ChatClientMultiMessage";
import { INetworkMessage } from "../../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { Commands } from "../../commands/Commands";
import { Robot } from "../../Robot";
import { INetworkExtractor } from "../INetworkExtractor";


export class ChatClientMultiMessageExtractor implements INetworkExtractor {

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
        if (Robot.get().commands.isChatCommand(this._message.content)) {
            this._wrapper.lock();
            Robot.get().commands.process(this._message.content);
        }
    }

}