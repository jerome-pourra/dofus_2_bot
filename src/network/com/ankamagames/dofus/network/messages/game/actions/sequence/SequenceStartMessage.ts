import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SequenceStartMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7231;

	public sequenceType: number = 0;
	public authorId: number = 0;

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
        this.deserializeAs_SequenceStartMessage(input);
    }

    private deserializeAs_SequenceStartMessage(input: ICustomDataInput)
    {
        this._sequenceTypeFunc(input);
        this._authorIdFunc(input);
    }

    private _sequenceTypeFunc(input: ICustomDataInput)
    {
        this.sequenceType = input.readByte();
    }

    private _authorIdFunc(input: ICustomDataInput)
    {
        this.authorId = input.readDouble();
        if(this.authorId < -9007199254740992 || this.authorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.authorId + ") on element of SequenceStartMessage.authorId.");
        }
    }

}