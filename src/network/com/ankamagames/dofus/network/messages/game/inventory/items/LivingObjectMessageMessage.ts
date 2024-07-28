import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class LivingObjectMessageMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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