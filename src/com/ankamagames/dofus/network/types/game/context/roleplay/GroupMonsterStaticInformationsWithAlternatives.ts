import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AlternativeMonstersInGroupLightInformations } from "./AlternativeMonstersInGroupLightInformations";
import { MonsterInGroupLightInformations } from "./MonsterInGroupLightInformations";
import { MonsterInGroupInformations } from "./MonsterInGroupInformations";
import { GroupMonsterStaticInformations } from "./GroupMonsterStaticInformations";

export class GroupMonsterStaticInformationsWithAlternatives extends GroupMonsterStaticInformations implements INetworkType
{

	public static readonly protocolId: number = 4829;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public alternatives: Array<AlternativeMonstersInGroupLightInformations>;

    public constructor()
    {
        super();
        this.alternatives = Array<AlternativeMonstersInGroupLightInformations>();
    }

    public getTypeId()
    {
        return GroupMonsterStaticInformationsWithAlternatives.protocolId;
    }

    public isEndpointClient()
    {
        return GroupMonsterStaticInformationsWithAlternatives.endpointClient;
    }

    public isEndpointServer()
    {
        return GroupMonsterStaticInformationsWithAlternatives.endpointServer;
    }

    public initGroupMonsterStaticInformationsWithAlternatives(mainCreatureLightInfos: MonsterInGroupLightInformations = null, underlings: Array<MonsterInGroupInformations> = null, alternatives: Array<AlternativeMonstersInGroupLightInformations> = null): GroupMonsterStaticInformationsWithAlternatives
    {
        super.initGroupMonsterStaticInformations(mainCreatureLightInfos,underlings);
        this.alternatives = alternatives;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GroupMonsterStaticInformationsWithAlternatives(output);
    }

    public serializeAs_GroupMonsterStaticInformationsWithAlternatives(output: ICustomDataOutput)
    {
        super.serializeAs_GroupMonsterStaticInformations(output);
        output.writeShort(this.alternatives.length);
        for(var _i1: number = 0; _i1 < this.alternatives.length; _i1++)
        {
            (this.alternatives[_i1] as AlternativeMonstersInGroupLightInformations).serializeAs_AlternativeMonstersInGroupLightInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GroupMonsterStaticInformationsWithAlternatives(input);
    }

    private deserializeAs_GroupMonsterStaticInformationsWithAlternatives(input: ICustomDataInput)
    {
        let _item1: AlternativeMonstersInGroupLightInformations;
        super.deserialize(input);
        let _alternativesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _alternativesLen; _i1++)
        {
            _item1 = new AlternativeMonstersInGroupLightInformations();
            _item1.deserialize(input);
            this.alternatives.push(_item1);
        }
    }

}