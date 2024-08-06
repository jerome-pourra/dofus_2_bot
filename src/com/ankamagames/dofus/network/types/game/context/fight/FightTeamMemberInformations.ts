import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightTeamMemberInformations implements INetworkType
{

	public static readonly protocolId: number = 9810;

	public id: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return FightTeamMemberInformations.protocolId;
    }

    public initFightTeamMemberInformations(id: number = 0): FightTeamMemberInformations
    {
        this.id = id;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTeamMemberInformations(output);
    }

    public serializeAs_FightTeamMemberInformations(output: ICustomDataOutput)
    {
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamMemberInformations(input);
    }

    private deserializeAs_FightTeamMemberInformations(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of FightTeamMemberInformations.id.");
        }
    }

}