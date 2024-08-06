import { GameContextActorPositionInformations } from "./../GameContextActorPositionInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GameContextBasicSpawnInformation implements INetworkType
{

	public static readonly protocolId: number = 1891;

	public teamId: number = 2;
	public alive: boolean = false;
	public informations: GameContextActorPositionInformations;

    public constructor()
    {
        this.informations = new GameContextActorPositionInformations();
    }

    public getTypeId()
    {
        return GameContextBasicSpawnInformation.protocolId;
    }

    public initGameContextBasicSpawnInformation(teamId: number = 2, alive: boolean = false, informations: GameContextActorPositionInformations = null): GameContextBasicSpawnInformation
    {
        this.teamId = teamId;
        this.alive = alive;
        this.informations = informations;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameContextBasicSpawnInformation(output);
    }

    public serializeAs_GameContextBasicSpawnInformation(output: ICustomDataOutput)
    {
        output.writeByte(this.teamId);
        output.writeBoolean(this.alive);
        output.writeShort(this.informations.getTypeId());
        this.informations.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextBasicSpawnInformation(input);
    }

    private deserializeAs_GameContextBasicSpawnInformation(input: ICustomDataInput)
    {
        this._teamIdFunc(input);
        this._aliveFunc(input);
        let _id3: number = input.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameContextActorPositionInformations,_id3);
        this.informations.deserialize(input);
    }

    private _teamIdFunc(input: ICustomDataInput)
    {
        this.teamId = input.readByte();
        if(this.teamId < 0)
        {
            throw new Error("Forbidden value (" + this.teamId + ") on element of GameContextBasicSpawnInformation.teamId.");
        }
    }

    private _aliveFunc(input: ICustomDataInput)
    {
        this.alive = input.readBoolean();
    }

}