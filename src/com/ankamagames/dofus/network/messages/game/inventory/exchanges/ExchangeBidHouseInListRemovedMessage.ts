import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseInListRemovedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4180;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public itemUID: number = 0;
	public objectGID: number = 0;
	public objectType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseInListRemovedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidHouseInListRemovedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidHouseInListRemovedMessage.endpointServer;
    }

    public initExchangeBidHouseInListRemovedMessage(itemUID: number = 0, objectGID: number = 0, objectType: number = 0): ExchangeBidHouseInListRemovedMessage
    {
        this.itemUID = itemUID;
        this.objectGID = objectGID;
        this.objectType = objectType;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeBidHouseInListRemovedMessage(output);
    }

    public serializeAs_ExchangeBidHouseInListRemovedMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.itemUID);
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
        if(this.objectType < 0)
        {
            throw new Error("Forbidden value (" + this.objectType + ") on element objectType.");
        }
        output.writeInt(this.objectType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseInListRemovedMessage(input);
    }

    private deserializeAs_ExchangeBidHouseInListRemovedMessage(input: ICustomDataInput)
    {
        this._itemUIDFunc(input);
        this._objectGIDFunc(input);
        this._objectTypeFunc(input);
    }

    private _itemUIDFunc(input: ICustomDataInput)
    {
        this.itemUID = input.readInt();
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ExchangeBidHouseInListRemovedMessage.objectGID.");
        }
    }

    private _objectTypeFunc(input: ICustomDataInput)
    {
        this.objectType = input.readInt();
        if(this.objectType < 0)
        {
            throw new Error("Forbidden value (" + this.objectType + ") on element of ExchangeBidHouseInListRemovedMessage.objectType.");
        }
    }

}