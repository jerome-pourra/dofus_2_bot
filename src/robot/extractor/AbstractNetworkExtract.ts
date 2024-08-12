import { INetworkMessage } from "../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkMessageWrapper } from "../../network/packet/NetworkMessageWrapper";

export abstract class AbstractNetworkExtract<T extends INetworkMessage> {

    protected _wrapper: NetworkMessageWrapper;
    protected _message: T;

    public constructor(wrapper: NetworkMessageWrapper, message: T) {
        if (!(wrapper.networkMessage instanceof message.constructor)) {
            throw new Error("Invalid message type");
        }
        this._wrapper = wrapper;
        this._message = wrapper.networkMessage as T;
    }

    public abstract process(): void;
}