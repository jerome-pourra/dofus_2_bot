import { ICustomDataInput } from "./../../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../../../jerakine/network/INetworkType";

export class AlignmentWarEffortInformation implements INetworkType
{

	public static readonly protocolId: number = 6941;

	public alignmentSide: number = 0;
	public alignmentWarEffort: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AlignmentWarEffortInformation.protocolId;
    }

    public initAlignmentWarEffortInformation(alignmentSide: number = 0, alignmentWarEffort: number = 0): AlignmentWarEffortInformation
    {
        this.alignmentSide = alignmentSide;
        this.alignmentWarEffort = alignmentWarEffort;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AlignmentWarEffortInformation(output);
    }

    public serializeAs_AlignmentWarEffortInformation(output: ICustomDataOutput)
    {
        output.writeByte(this.alignmentSide);
        if(this.alignmentWarEffort < 0 || this.alignmentWarEffort > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.alignmentWarEffort + ") on element alignmentWarEffort.");
        }
        output.writeVarLong(this.alignmentWarEffort);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlignmentWarEffortInformation(input);
    }

    private deserializeAs_AlignmentWarEffortInformation(input: ICustomDataInput)
    {
        this._alignmentSideFunc(input);
        this._alignmentWarEffortFunc(input);
    }

    private _alignmentSideFunc(input: ICustomDataInput)
    {
        this.alignmentSide = input.readByte();
    }

    private _alignmentWarEffortFunc(input: ICustomDataInput)
    {
        this.alignmentWarEffort = input.readVarUhLong();
        if(this.alignmentWarEffort < 0 || this.alignmentWarEffort > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.alignmentWarEffort + ") on element of AlignmentWarEffortInformation.alignmentWarEffort.");
        }
    }

}