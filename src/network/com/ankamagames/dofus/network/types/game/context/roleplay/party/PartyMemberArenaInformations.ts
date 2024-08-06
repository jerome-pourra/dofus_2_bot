import { PlayerStatus } from "./../../../character/status/PlayerStatus";
import { PartyEntityBaseInformation } from "./entity/PartyEntityBaseInformation";
import { EntityLook } from "./../../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { PartyMemberInformations } from "./PartyMemberInformations";

export class PartyMemberArenaInformations extends PartyMemberInformations implements INetworkType
{

	public static readonly protocolId: number = 2056;

	public rank: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return PartyMemberArenaInformations.protocolId;
    }

    public initPartyMemberArenaInformations(id: number = 0, name: string = "", level: number = 0, entityLook: EntityLook = null, breed: number = 0, sex: boolean = false, lifePoints: number = 0, maxLifePoints: number = 0, prospecting: number = 0, regenRate: number = 0, initiative: number = 0, alignmentSide: number = 0, worldX: number = 0, worldY: number = 0, mapId: number = 0, subAreaId: number = 0, status: PlayerStatus = null, entities: Array<PartyEntityBaseInformation> = null, rank: number = 0): PartyMemberArenaInformations
    {
        super.initPartyMemberInformations(id,name,level,entityLook,breed,sex,lifePoints,maxLifePoints,prospecting,regenRate,initiative,alignmentSide,worldX,worldY,mapId,subAreaId,status,entities);
        this.rank = rank;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyMemberArenaInformations(output);
    }

    public serializeAs_PartyMemberArenaInformations(output: ICustomDataOutput)
    {
        super.serializeAs_PartyMemberInformations(output);
        if(this.rank < 0 || this.rank > 20000)
        {
            throw new Error("Forbidden value (" + this.rank + ") on element rank.");
        }
        output.writeVarShort(this.rank);
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