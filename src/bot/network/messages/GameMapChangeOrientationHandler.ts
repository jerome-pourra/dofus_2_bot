import { GameMapChangeOrientationMessage } from "../../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationMessage";
import { INetworkMessage } from "../../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { INetworkHandler } from "../INetworkHandler";

export class GameMapChangeOrientationHandler implements INetworkHandler {

    private _wrapper: NetworkMessageWrapper;
    private _message: GameMapChangeOrientationMessage;

    constructor(wrapper: NetworkMessageWrapper) {
        let message: INetworkMessage = wrapper.networkMessage;
        if (!(message instanceof GameMapChangeOrientationMessage)) {
            throw new Error("Invalid message type: " + message.constructor.name);
        }
        this._wrapper = wrapper;
        this._message = message;
    }

    public process() {

    }

}