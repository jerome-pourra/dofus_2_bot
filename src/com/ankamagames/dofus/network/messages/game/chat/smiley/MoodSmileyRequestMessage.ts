import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MoodSmileyRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6420;

	public smileyId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MoodSmileyRequestMessage.protocolId;
    }

    public initMoodSmileyRequestMessage(smileyId: number = 0): MoodSmileyRequestMessage
    {
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
        this.serializeAs_MoodSmileyRequestMessage(output);
    }

    public serializeAs_MoodSmileyRequestMessage(output: ICustomDataOutput)
    {
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
        }
        output.writeVarShort(this.smileyId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MoodSmileyRequestMessage(input);
    }

    private deserializeAs_MoodSmileyRequestMessage(input: ICustomDataInput)
    {
        this._smileyIdFunc(input);
    }

    private _smileyIdFunc(input: ICustomDataInput)
    {
        this.smileyId = input.readVarUhShort();
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element of MoodSmileyRequestMessage.smileyId.");
        }
    }

}