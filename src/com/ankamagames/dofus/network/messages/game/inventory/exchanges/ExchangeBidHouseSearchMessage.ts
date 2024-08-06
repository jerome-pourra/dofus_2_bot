import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseSearchMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5862;

	public objectGID: number = 0;
	public follow: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidHouseSearchMessage.protocolId;
    }

    public initExchangeBidHouseSearchMessage(objectGID: number = 0, follow: boolean = false): ExchangeBidHouseSearchMessage
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
        this.serializeAs_ExchangeBidHouseSearchMessage(output);
    }

    public serializeAs_ExchangeBidHouseSearchMessage(output: ICustomDataOutput)
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
        this.deserializeAs_ExchangeBidHouseSearchMessage(input);
    }

    private deserializeAs_ExchangeBidHouseSearchMessage(input: ICustomDataInput)
    {
        this._objectGIDFunc(input);
        this._followFunc(input);
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ExchangeBidHouseSearchMessage.objectGID.");
        }
    }

    private _followFunc(input: ICustomDataInput)
    {
        this.follow = input.readBoolean();
    }

}