import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeSetCraftRecipeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3981;

	public objectGID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeSetCraftRecipeMessage.protocolId;
    }

    public initExchangeSetCraftRecipeMessage(objectGID: number = 0): ExchangeSetCraftRecipeMessage
    {
        this.objectGID = objectGID;
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
        this.serializeAs_ExchangeSetCraftRecipeMessage(output);
    }

    public serializeAs_ExchangeSetCraftRecipeMessage(output: ICustomDataOutput)
    {
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeSetCraftRecipeMessage(input);
    }

    private deserializeAs_ExchangeSetCraftRecipeMessage(input: ICustomDataInput)
    {
        this._objectGIDFunc(input);
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ExchangeSetCraftRecipeMessage.objectGID.");
        }
    }

}