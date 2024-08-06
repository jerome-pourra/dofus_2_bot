import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class NamedPartyTeam implements INetworkType
{

	public static readonly protocolId: number = 9179;

	public teamId: number = 2;
	public partyName: string = "";

    public constructor()
    {

    }

    public getTypeId()
    {
        return NamedPartyTeam.protocolId;
    }

    public initNamedPartyTeam(teamId: number = 2, partyName: string = ""): NamedPartyTeam
    {
        this.teamId = teamId;
        this.partyName = partyName;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_NamedPartyTeam(output);
    }

    public serializeAs_NamedPartyTeam(output: ICustomDataOutput)
    {
        output.writeByte(this.teamId);
        output.writeUTF(this.partyName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NamedPartyTeam(input);
    }

    private deserializeAs_NamedPartyTeam(input: ICustomDataInput)
    {
        this._teamIdFunc(input);
        this._partyNameFunc(input);
    }

    private _teamIdFunc(input: ICustomDataInput)
    {
        this.teamId = input.readByte();
        if(this.teamId < 0)
        {
            throw new Error("Forbidden value (" + this.teamId + ") on element of NamedPartyTeam.teamId.");
        }
    }

    private _partyNameFunc(input: ICustomDataInput)
    {
        this.partyName = input.readUTF();
    }

}