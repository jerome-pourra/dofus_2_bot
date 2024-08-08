import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightOptionStateUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3172;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public fightId: number = 0;
	public teamId: number = 2;
	public option: number = 3;
	public state: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightOptionStateUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightOptionStateUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightOptionStateUpdateMessage.endpointServer;
    }

    public initGameFightOptionStateUpdateMessage(fightId: number = 0, teamId: number = 2, option: number = 3, state: boolean = false): GameFightOptionStateUpdateMessage
    {
        this.fightId = fightId;
        this.teamId = teamId;
        this.option = option;
        this.state = state;
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
        this.serializeAs_GameFightOptionStateUpdateMessage(output);
    }

    public serializeAs_GameFightOptionStateUpdateMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        output.writeByte(this.teamId);
        output.writeByte(this.option);
        output.writeBoolean(this.state);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightOptionStateUpdateMessage(input);
    }

    private deserializeAs_GameFightOptionStateUpdateMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._teamIdFunc(input);
        this._optionFunc(input);
        this._stateFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightOptionStateUpdateMessage.fightId.");
        }
    }

    private _teamIdFunc(input: ICustomDataInput)
    {
        this.teamId = input.readByte();
        if(this.teamId < 0)
        {
            throw new Error("Forbidden value (" + this.teamId + ") on element of GameFightOptionStateUpdateMessage.teamId.");
        }
    }

    private _optionFunc(input: ICustomDataInput)
    {
        this.option = input.readByte();
        if(this.option < 0)
        {
            throw new Error("Forbidden value (" + this.option + ") on element of GameFightOptionStateUpdateMessage.option.");
        }
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readBoolean();
    }

}