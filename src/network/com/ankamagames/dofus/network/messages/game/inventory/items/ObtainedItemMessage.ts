import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObtainedItemMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9678;

	public genericId: number = 0;
	public baseQuantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObtainedItemMessage.protocolId;
    }

    public initObtainedItemMessage(genericId: number = 0, baseQuantity: number = 0): ObtainedItemMessage
    {
        this.genericId = genericId;
        this.baseQuantity = baseQuantity;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObtainedItemMessage(output);
    }

    public serializeAs_ObtainedItemMessage(output: ICustomDataOutput)
    {
        if(this.genericId < 0)
        {
            throw new Error("Forbidden value (" + this.genericId + ") on element genericId.");
        }
        output.writeVarInt(this.genericId);
        if(this.baseQuantity < 0)
        {
            throw new Error("Forbidden value (" + this.baseQuantity + ") on element baseQuantity.");
        }
        output.writeVarInt(this.baseQuantity);
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