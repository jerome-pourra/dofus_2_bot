import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GroupMonsterStaticInformations } from "./GroupMonsterStaticInformations";
import { GameRolePlayGroupMonsterInformations } from "./GameRolePlayGroupMonsterInformations";

export class GameRolePlayGroupMonsterWaveInformations extends GameRolePlayGroupMonsterInformations implements INetworkType
{

	public static readonly protocolId: number = 6822;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public nbWaves: number = 0;
	public alternatives: Array<GroupMonsterStaticInformations>;

    public constructor()
    {
        super();
        this.alternatives = Array<GroupMonsterStaticInformations>();
    }

    public getTypeId()
    {
        return GameRolePlayGroupMonsterWaveInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayGroupMonsterWaveInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayGroupMonsterWaveInformations.endpointServer;
    }

    public initGameRolePlayGroupMonsterWaveInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, staticInfos: GroupMonsterStaticInformations = null, lootShare: number = 0, alignmentSide: number = 0, hasHardcoreDrop: boolean = false, nbWaves: number = 0, alternatives: Array<GroupMonsterStaticInformations> = null): GameRolePlayGroupMonsterWaveInformations
    {
        super.initGameRolePlayGroupMonsterInformations(contextualId,disposition,look,staticInfos,lootShare,alignmentSide,hasHardcoreDrop);
        this.nbWaves = nbWaves;
        this.alternatives = alternatives;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayGroupMonsterWaveInformations(output);
    }

    public serializeAs_GameRolePlayGroupMonsterWaveInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayGroupMonsterInformations(output);
        if(this.nbWaves < 0)
        {
            throw new Error("Forbidden value (" + this.nbWaves + ") on element nbWaves.");
        }
        output.writeByte(this.nbWaves);
        output.writeShort(this.alternatives.length);
        for(var _i2: number = 0; _i2 < this.alternatives.length; _i2++)
        {
            output.writeShort((this.alternatives[_i2] as GroupMonsterStaticInformations).getTypeId());
            (this.alternatives[_i2] as GroupMonsterStaticInformations).serialize(output);
        }
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