import { AbstractSocialGroupInfos } from "./../../social/AbstractSocialGroupInfos";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class BasicAllianceInformations extends AbstractSocialGroupInfos
{

	public static readonly protocolId: number = 2995;

	public allianceId: number = 0;
	public allianceTag: string = "";

    public constructor()
    {
        super();
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