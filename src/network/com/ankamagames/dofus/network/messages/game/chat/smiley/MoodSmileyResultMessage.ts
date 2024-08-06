import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MoodSmileyResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1383;

	public resultCode: number = 1;
	public smileyId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MoodSmileyResultMessage.protocolId;
    }

    public initMoodSmileyResultMessage(resultCode: number = 1, smileyId: number = 0): MoodSmileyResultMessage
    {
        this.resultCode = resultCode;
        this.smileyId = smileyId;
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
        this.serializeAs_MoodSmileyResultMessage(output);
    }

    public serializeAs_MoodSmileyResultMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.resultCode);
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
        }
        output.writeVarShort(this.smileyId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MoodSmileyResultMessage(input);
    }

    private deserializeAs_MoodSmileyResultMessage(input: ICustomDataInput)
    {
        this._resultCodeFunc(input);
        this._smileyIdFunc(input);
    }

    private _resultCodeFunc(input: ICustomDataInput)
    {
        this.resultCode = input.readByte();
        if(this.resultCode < 0)
        {
            throw new Error("Forbidden value (" + this.resultCode + ") on element of MoodSmileyResultMessage.resultCode.");
        }
    }

    private _smileyIdFunc(input: ICustomDataInput)
    {
        this.smileyId = input.readVarUhShort();
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element of MoodSmileyResultMessage.smileyId.");
        }
    }

}