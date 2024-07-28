import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GroupMonsterStaticInformations } from "./GroupMonsterStaticInformations";
import { GameRolePlayGroupMonsterInformations } from "./GameRolePlayGroupMonsterInformations";

export class GameRolePlayGroupMonsterWaveInformations extends GameRolePlayGroupMonsterInformations
{

	public static readonly protocolId: number = 6822;

	public nbWaves: number = 0;
	public alternatives: Array<GroupMonsterStaticInformations>;

    public constructor()
    {
        super();
        this.alternatives = Array<GroupMonsterStaticInformations>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayGroupMonsterWaveInformations(input);
    }

    private deserializeAs_GameRolePlayGroupMonsterWaveInformations(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: GroupMonsterStaticInformations;
        super.deserialize(input);
        this._nbWavesFunc(input);
        let _alternativesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _alternativesLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations,_id2);
            _item2.deserialize(input);
            this.alternatives.push(_item2);
        }
    }

    private _nbWavesFunc(input: ICustomDataInput)
    {
        this.nbWaves = input.readByte();
        if(this.nbWaves < 0)
        {
            throw new Error("Forbidden value (" + this.nbWaves + ") on element of GameRolePlayGroupMonsterWaveInformations.nbWaves.");
        }
    }

}