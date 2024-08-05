import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeReadyMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9547;

	public ready: boolean = false;
	public step: number = 0;

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
        this.deserializeAs_ExchangeReadyMessage(input);
    }

    private deserializeAs_ExchangeReadyMessage(input: ICustomDataInput)
    {
        this._readyFunc(input);
        this._stepFunc(input);
    }

    private _readyFunc(input: ICustomDataInput)
    {
        this.ready = input.readBoolean();
    }

    private _stepFunc(input: ICustomDataInput)
    {
        this.step = input.readVarUhShort();
        if(this.step < 0)
        {
            throw new Error("Forbidden value (" + this.step + ") on element of ExchangeReadyMessage.step.");
        }
    }

}