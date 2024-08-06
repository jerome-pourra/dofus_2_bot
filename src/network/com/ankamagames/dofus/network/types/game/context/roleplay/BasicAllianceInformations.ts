import { AbstractSocialGroupInfos } from "./../../social/AbstractSocialGroupInfos";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class BasicAllianceInformations extends AbstractSocialGroupInfos implements INetworkType
{

	public static readonly protocolId: number = 2995;

	public allianceId: number = 0;
	public allianceTag: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return BasicAllianceInformations.protocolId;
    }

    public initBasicAllianceInformations(allianceId: number = 0, allianceTag: string = ""): BasicAllianceInformations
    {
        this.allianceId = allianceId;
        this.allianceTag = allianceTag;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BasicAllianceInformations(output);
    }

    public serializeAs_BasicAllianceInformations(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractSocialGroupInfos(output);
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
        }
        output.writeVarInt(this.allianceId);
        output.writeUTF(this.allianceTag);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicAllianceInformations(input);
    }

    private deserializeAs_BasicAllianceInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._allianceIdFunc(input);
        this._allianceTagFunc(input);
    }

    private _allianceIdFunc(input: ICustomDataInput)
    {
        this.allianceId = input.readVarUhInt();
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element of BasicAllianceInformations.allianceId.");
        }
    }

    private _allianceTagFunc(input: ICustomDataInput)
    {
        this.allianceTag = input.readUTF();
    }

}