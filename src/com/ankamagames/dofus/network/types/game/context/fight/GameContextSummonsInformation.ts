import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SpawnInformation } from "./SpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";

export class GameContextSummonsInformation implements INetworkType
{

	public static readonly protocolId: number = 5419;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public spawnInformation: SpawnInformation;
	public wave: number = 0;
	public look: EntityLook;
	public stats: GameFightCharacteristics;
	public summons: Array<GameContextBasicSpawnInformation>;

    public constructor()
    {
        this.spawnInformation = new SpawnInformation();
        this.look = new EntityLook();
        this.stats = new GameFightCharacteristics();
        this.summons = Array<GameContextBasicSpawnInformation>();
    }

    public getTypeId()
    {
        return GameContextSummonsInformation.protocolId;
    }

    public isEndpointClient()
    {
        return GameContextSummonsInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return GameContextSummonsInformation.endpointServer;
    }

    public initGameContextSummonsInformation(spawnInformation: SpawnInformation = null, wave: number = 0, look: EntityLook = null, stats: GameFightCharacteristics = null, summons: Array<GameContextBasicSpawnInformation> = null): GameContextSummonsInformation
    {
        this.spawnInformation = spawnInformation;
        this.wave = wave;
        this.look = look;
        this.stats = stats;
        this.summons = summons;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameContextSummonsInformation(output);
    }

    public serializeAs_GameContextSummonsInformation(output: ICustomDataOutput)
    {
        output.writeShort(this.spawnInformation.getTypeId());
        this.spawnInformation.serialize(output);
        if(this.wave < 0)
        {
            throw new Error("Forbidden value (" + this.wave + ") on element wave.");
        }
        output.writeByte(this.wave);
        this.look.serializeAs_EntityLook(output);
        output.writeShort(this.stats.getTypeId());
        this.stats.serialize(output);
        output.writeShort(this.summons.length);
        for(var _i5: number = 0; _i5 < this.summons.length; _i5++)
        {
            output.writeShort((this.summons[_i5] as GameContextBasicSpawnInformation).getTypeId());
            (this.summons[_i5] as GameContextBasicSpawnInformation).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextSummonsInformation(input);
    }

    private deserializeAs_GameContextSummonsInformation(input: ICustomDataInput)
    {
        let _id5: number = 0;
        let _item5: GameContextBasicSpawnInformation;
        let _id1: number = input.readUnsignedShort();
        this.spawnInformation = ProtocolTypeManager.getInstance(SpawnInformation,_id1);
        this.spawnInformation.deserialize(input);
        this._waveFunc(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
        let _id4: number = input.readUnsignedShort();
        this.stats = ProtocolTypeManager.getInstance(GameFightCharacteristics,_id4);
        this.stats.deserialize(input);
        let _summonsLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _summonsLen; _i5++)
        {
            _id5 = input.readUnsignedShort();
            _item5 = ProtocolTypeManager.getInstance(GameContextBasicSpawnInformation,_id5);
            _item5.deserialize(input);
            this.summons.push(_item5);
        }
    }

    private _waveFunc(input: ICustomDataInput)
    {
        this.wave = input.readByte();
        if(this.wave < 0)
        {
            throw new Error("Forbidden value (" + this.wave + ") on element of GameContextSummonsInformation.wave.");
        }
    }

}