import { PlayerStatus } from "./../../../character/status/PlayerStatus";
import { PartyEntityBaseInformation } from "./entity/PartyEntityBaseInformation";
import { EntityLook } from "./../../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { PartyMemberInformations } from "./PartyMemberInformations";

export class PartyMemberArenaInformations extends PartyMemberInformations
{

	public static readonly protocolId: number = 2056;

	public rank: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyMemberArenaInformations(input);
    }

    private deserializeAs_PartyMemberArenaInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._rankFunc(input);
    }

    private _rankFunc(input: ICustomDataInput)
    {
        this.rank = input.readVarUhShort();
        if(this.rank < 0 || this.rank > 20000)
        {
            throw new Error("Forbidden value (" + this.rank + ") on element of PartyMemberArenaInformations.rank.");
        }
    }

}