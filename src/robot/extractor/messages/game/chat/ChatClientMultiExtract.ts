import { ChatClientMultiMessage } from "../../../../../com/ankamagames/dofus/network/messages/game/chat/ChatClientMultiMessage";
import { NetworkMessageWrapper } from "../../../../../network/packet/NetworkMessageWrapper";
import { Robot } from "../../../../Robot";
import { AbstractNetworkExtract } from "../../../AbstractNetworkExtract";

export class ChatClientMultiMessageExtract extends AbstractNetworkExtract<ChatClientMultiMessage> {

    constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, ChatClientMultiMessage.prototype);
    }

    public process(): void {
        if (Robot.get().commands.isChatCommand(this._message.content)) {
            this._wrapper.lock();
            Robot.get().commands.process(this._message.content);
        }
    }

}