import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightNewWaveMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4448;

	public id: number = 0;
	public teamId: number = 2;
	public nbTurnBeforeNextWave: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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