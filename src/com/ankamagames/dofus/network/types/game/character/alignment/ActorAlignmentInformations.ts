import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class ActorAlignmentInformations implements INetworkType
{

	public static readonly protocolId: number = 2626;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public alignmentSide: number = 0;
	public alignmentValue: number = 0;
	public alignmentGrade: number = 0;
	public characterPower: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ActorAlignmentInformations.protocolId;
    }

    public isEndpointClient()
    {
        return ActorAlignmentInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return ActorAlignmentInformations.endpointServer;
    }

    public initActorAlignmentInformations(alignmentSide: number = 0, alignmentValue: number = 0, alignmentGrade: number = 0, characterPower: number = 0): ActorAlignmentInformations
    {
        this.alignmentSide = alignmentSide;
        this.alignmentValue = alignmentValue;
        this.alignmentGrade = alignmentGrade;
        this.characterPower = characterPower;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ActorAlignmentInformations(output);
    }

    public serializeAs_ActorAlignmentInformations(output: ICustomDataOutput)
    {
        output.writeByte(this.alignmentSide);
        if(this.alignmentValue < 0)
        {
            throw new Error("Forbidden value (" + this.alignmentValue + ") on element alignmentValue.");
        }
        output.writeByte(this.alignmentValue);
        if(this.alignmentGrade < 0)
        {
            throw new Error("Forbidden value (" + this.alignmentGrade + ") on element alignmentGrade.");
        }
        output.writeByte(this.alignmentGrade);
        if(this.characterPower < -9007199254740992 || this.characterPower > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterPower + ") on element characterPower.");
        }
        output.writeDouble(this.characterPower);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ActorAlignmentInformations(input);
    }

    private deserializeAs_ActorAlignmentInformations(input: ICustomDataInput)
    {
        this._alignmentSideFunc(input);
        this._alignmentValueFunc(input);
        this._alignmentGradeFunc(input);
        this._characterPowerFunc(input);
    }

    private _alignmentSideFunc(input: ICustomDataInput)
    {
        this.alignmentSide = input.readByte();
    }

    private _alignmentValueFunc(input: ICustomDataInput)
    {
        this.alignmentValue = input.readByte();
        if(this.alignmentValue < 0)
        {
            throw new Error("Forbidden value (" + this.alignmentValue + ") on element of ActorAlignmentInformations.alignmentValue.");
        }
    }

    private _alignmentGradeFunc(input: ICustomDataInput)
    {
        this.alignmentGrade = input.readByte();
        if(this.alignmentGrade < 0)
        {
            throw new Error("Forbidden value (" + this.alignmentGrade + ") on element of ActorAlignmentInformations.alignmentGrade.");
        }
    }

    private _characterPowerFunc(input: ICustomDataInput)
    {
        this.characterPower = input.readDouble();
        if(this.characterPower < -9007199254740992 || this.characterPower > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterPower + ") on element of ActorAlignmentInformations.characterPower.");
        }
    }

}