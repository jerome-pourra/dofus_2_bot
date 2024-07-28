import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorStateUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5744;

	public uniqueId: number = 0;
	public state: number = 0;

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
        this.deserializeAs_TaxCollectorStateUpdateMessage(input);
    }

    private deserializeAs_TaxCollectorStateUpdateMessage(input: ICustomDataInput)
    {
        this._uniqueIdFunc(input);
        this._stateFunc(input);
    }

    private _uniqueIdFunc(input: ICustomDataInput)
    {
        this.uniqueId = input.readDouble();
        if(this.uniqueId < 0 || this.uniqueId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uniqueId + ") on element of TaxCollectorStateUpdateMessage.uniqueId.");
        }
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of TaxCollectorStateUpdateMessage.state.");
        }
    }

}