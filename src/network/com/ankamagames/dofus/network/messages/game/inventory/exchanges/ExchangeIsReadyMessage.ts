import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeIsReadyMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4377;

	public id: number = 0;
	public ready: boolean = false;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeIsReadyMessage(input);
    }

    private deserializeAs_ExchangeIsReadyMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._readyFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of ExchangeIsReadyMessage.id.");
        }
    }

    private _readyFunc(input: ICustomDataInput)
    {
        this.ready = input.readBoolean();
    }

}