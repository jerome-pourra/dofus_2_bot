import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightRemoveTeamMemberMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7301;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public fightId: number = 0;
	public teamId: number = 2;
	public charId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightRemoveTeamMemberMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightRemoveTeamMemberMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightRemoveTeamMemberMessage.endpointServer;
    }

    public initGameFightRemoveTeamMemberMessage(fightId: number = 0, teamId: number = 2, charId: number = 0): GameFightRemoveTeamMemberMessage
    {
        this.fightId = fightId;
        this.teamId = teamId;
        this.charId = charId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightRemoveTeamMemberMessage(output);
    }

    public serializeAs_GameFightRemoveTeamMemberMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        output.writeByte(this.teamId);
        if(this.charId < -9007199254740992 || this.charId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.charId + ") on element charId.");
        }
        output.writeDouble(this.charId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightRemoveTeamMemberMessage(input);
    }

    private deserializeAs_GameFightRemoveTeamMemberMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._teamIdFunc(input);
        this._charIdFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightRemoveTeamMemberMessage.fightId.");
        }
    }

    private _teamIdFunc(input: ICustomDataInput)
    {
        this.teamId = input.readByte();
        if(this.teamId < 0)
        {
            throw new Error("Forbidden value (" + this.teamId + ") on element of GameFightRemoveTeamMemberMessage.teamId.");
        }
    }

    private _charIdFunc(input: ICustomDataInput)
    {
        this.charId = input.readDouble();
        if(this.charId < -9007199254740992 || this.charId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.charId + ") on element of GameFightRemoveTeamMemberMessage.charId.");
        }
    }

}