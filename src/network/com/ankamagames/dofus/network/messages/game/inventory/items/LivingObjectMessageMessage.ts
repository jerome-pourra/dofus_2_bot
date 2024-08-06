import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class LivingObjectMessageMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6015;

	public msgId: number = 0;
	public timeStamp: number = 0;
	public owner: string = "";
	public objectGenericId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LivingObjectMessageMessage.protocolId;
    }

    public initLivingObjectMessageMessage(msgId: number = 0, timeStamp: number = 0, owner: string = "", objectGenericId: number = 0): LivingObjectMessageMessage
    {
        this.msgId = msgId;
        this.timeStamp = timeStamp;
        this.owner = owner;
        this.objectGenericId = objectGenericId;
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
        this.serializeAs_LivingObjectMessageMessage(output);
    }

    public serializeAs_LivingObjectMessageMessage(output: ICustomDataOutput)
    {
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element msgId.");
        }
        output.writeVarShort(this.msgId);
        if(this.timeStamp < 0)
        {
            throw new Error("Forbidden value (" + this.timeStamp + ") on element timeStamp.");
        }
        output.writeInt(this.timeStamp);
        output.writeUTF(this.owner);
        if(this.objectGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.objectGenericId + ") on element objectGenericId.");
        }
        output.writeVarInt(this.objectGenericId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LivingObjectMessageMessage(input);
    }

    private deserializeAs_LivingObjectMessageMessage(input: ICustomDataInput)
    {
        this._msgIdFunc(input);
        this._timeStampFunc(input);
        this._ownerFunc(input);
        this._objectGenericIdFunc(input);
    }

    private _msgIdFunc(input: ICustomDataInput)
    {
        this.msgId = input.readVarUhShort();
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element of LivingObjectMessageMessage.msgId.");
        }
    }

    private _timeStampFunc(input: ICustomDataInput)
    {
        this.timeStamp = input.readInt();
        if(this.timeStamp < 0)
        {
            throw new Error("Forbidden value (" + this.timeStamp + ") on element of LivingObjectMessageMessage.timeStamp.");
        }
    }

    private _ownerFunc(input: ICustomDataInput)
    {
        this.owner = input.readUTF();
    }

    private _objectGenericIdFunc(input: ICustomDataInput)
    {
        this.objectGenericId = input.readVarUhInt();
        if(this.objectGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.objectGenericId + ") on element of LivingObjectMessageMessage.objectGenericId.");
        }
    }

}