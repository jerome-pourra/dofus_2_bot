import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObtainedItemMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9678;

	public genericId: number = 0;
	public baseQuantity: number = 0;

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
        this.deserializeAs_ObtainedItemMessage(input);
    }

    private deserializeAs_ObtainedItemMessage(input: ICustomDataInput)
    {
        this._genericIdFunc(input);
        this._baseQuantityFunc(input);
    }

    private _genericIdFunc(input: ICustomDataInput)
    {
        this.genericId = input.readVarUhInt();
        if(this.genericId < 0)
        {
            throw new Error("Forbidden value (" + this.genericId + ") on element of ObtainedItemMessage.genericId.");
        }
    }

    private _baseQuantityFunc(input: ICustomDataInput)
    {
        this.baseQuantity = input.readVarUhInt();
        if(this.baseQuantity < 0)
        {
            throw new Error("Forbidden value (" + this.baseQuantity + ") on element of ObtainedItemMessage.baseQuantity.");
        }
    }

}