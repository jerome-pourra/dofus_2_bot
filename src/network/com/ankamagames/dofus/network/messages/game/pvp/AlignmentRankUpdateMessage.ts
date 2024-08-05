import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AlignmentRankUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5019;

	public alignmentRank: number = 0;
	public verbose: boolean = false;

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