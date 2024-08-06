import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AlignmentRankUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5019;

	public alignmentRank: number = 0;
	public verbose: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AlignmentRankUpdateMessage.protocolId;
    }

    public initAlignmentRankUpdateMessage(alignmentRank: number = 0, verbose: boolean = false): AlignmentRankUpdateMessage
    {
        this.alignmentRank = alignmentRank;
        this.verbose = verbose;
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
        this.serializeAs_AlignmentRankUpdateMessage(output);
    }

    public serializeAs_AlignmentRankUpdateMessage(output: ICustomDataOutput)
    {
        if(this.alignmentRank < 0)
        {
            throw new Error("Forbidden value (" + this.alignmentRank + ") on element alignmentRank.");
        }
        output.writeByte(this.alignmentRank);
        output.writeBoolean(this.verbose);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlignmentRankUpdateMessage(input);
    }

    private deserializeAs_AlignmentRankUpdateMessage(input: ICustomDataInput)
    {
        this._alignmentRankFunc(input);
        this._verboseFunc(input);
    }

    private _alignmentRankFunc(input: ICustomDataInput)
    {
        this.alignmentRank = input.readByte();
        if(this.alignmentRank < 0)
        {
            throw new Error("Forbidden value (" + this.alignmentRank + ") on element of AlignmentRankUpdateMessage.alignmentRank.");
        }
    }

    private _verboseFunc(input: ICustomDataInput)
    {
        this.verbose = input.readBoolean();
    }

}