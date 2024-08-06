import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightNewWaveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4448;

	public id: number = 0;
	public teamId: number = 2;
	public nbTurnBeforeNextWave: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightNewWaveMessage.protocolId;
    }

    public initGameFightNewWaveMessage(id: number = 0, teamId: number = 2, nbTurnBeforeNextWave: number = 0): GameFightNewWaveMessage
    {
        this.id = id;
        this.teamId = teamId;
        this.nbTurnBeforeNextWave = nbTurnBeforeNextWave;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightNewWaveMessage(output);
    }

    public serializeAs_GameFightNewWaveMessage(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeByte(this.id);
        output.writeByte(this.teamId);
        output.writeShort(this.nbTurnBeforeNextWave);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightNewWaveMessage(input);
    }

    private deserializeAs_GameFightNewWaveMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._teamIdFunc(input);
        this._nbTurnBeforeNextWaveFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readByte();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of GameFightNewWaveMessage.id.");
        }
    }

    private _teamIdFunc(input: ICustomDataInput)
    {
        this.teamId = input.readByte();
        if(this.teamId < 0)
        {
            throw new Error("Forbidden value (" + this.teamId + ") on element of GameFightNewWaveMessage.teamId.");
        }
    }

    private _nbTurnBeforeNextWaveFunc(input: ICustomDataInput)
    {
        this.nbTurnBeforeNextWave = input.readShort();
    }

}