import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AlternativeMonstersInGroupLightInformations } from "./AlternativeMonstersInGroupLightInformations";
import { GroupMonsterStaticInformations } from "./GroupMonsterStaticInformations";

export class GroupMonsterStaticInformationsWithAlternatives extends GroupMonsterStaticInformations
{

	public static readonly protocolId: number = 4829;

	public alternatives: Array<AlternativeMonstersInGroupLightInformations>;

    public constructor()
    {
        super();
        this.alternatives = Array<AlternativeMonstersInGroupLightInformations>();
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