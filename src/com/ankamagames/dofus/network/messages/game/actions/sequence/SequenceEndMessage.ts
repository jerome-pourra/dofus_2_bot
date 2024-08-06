import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SequenceEndMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1586;

	public actionId: number = 0;
	public authorId: number = 0;
	public sequenceType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SequenceEndMessage.protocolId;
    }

    public initSequenceEndMessage(actionId: number = 0, authorId: number = 0, sequenceType: number = 0): SequenceEndMessage
    {
        this.actionId = actionId;
        this.authorId = authorId;
        this.sequenceType = sequenceType;
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
        this.serializeAs_SequenceEndMessage(output);
    }

    public serializeAs_SequenceEndMessage(output: ICustomDataOutput)
    {
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
        }
        output.writeVarShort(this.actionId);
        if(this.authorId < -9007199254740992 || this.authorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.authorId + ") on element authorId.");
        }
        output.writeDouble(this.authorId);
        output.writeByte(this.sequenceType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SequenceEndMessage(input);
    }

    private deserializeAs_SequenceEndMessage(input: ICustomDataInput)
    {
        this._actionIdFunc(input);
        this._authorIdFunc(input);
        this._sequenceTypeFunc(input);
    }

    private _actionIdFunc(input: ICustomDataInput)
    {
        this.actionId = input.readVarUhShort();
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element of SequenceEndMessage.actionId.");
        }
    }

    private _authorIdFunc(input: ICustomDataInput)
    {
        this.authorId = input.readDouble();
        if(this.authorId < -9007199254740992 || this.authorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.authorId + ") on element of SequenceEndMessage.authorId.");
        }
    }

    private _sequenceTypeFunc(input: ICustomDataInput)
    {
        this.sequenceType = input.readByte();
    }

}