import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6171;

	public objectGID: number = 0;
	public follow: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseListMessage.protocolId;
    }

    public initExchangeBidHouseListMessage(objectGID: number = 0, follow: boolean = false): ExchangeBidHouseListMessage
    {
        this.objectGID = objectGID;
        this.follow = follow;
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
        this.serializeAs_ExchangeBidHouseListMessage(output);
    }

    public serializeAs_ExchangeBidHouseListMessage(output: ICustomDataOutput)
    {
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
        output.writeBoolean(this.follow);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseListMessage(input);
    }

    private deserializeAs_ExchangeBidHouseListMessage(input: ICustomDataInput)
    {
        this._objectGIDFunc(input);
        this._followFunc(input);
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ExchangeBidHouseListMessage.objectGID.");
        }
    }

    private _followFunc(input: ICustomDataInput)
    {
        this.follow = input.readBoolean();
    }

}