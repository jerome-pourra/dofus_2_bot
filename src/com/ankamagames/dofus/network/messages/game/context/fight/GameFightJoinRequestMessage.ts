import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightJoinRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4010;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public fighterId: number = 0;
	public fightId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightJoinRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightJoinRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightJoinRequestMessage.endpointServer;
    }

    public initGameFightJoinRequestMessage(fighterId: number = 0, fightId: number = 0): GameFightJoinRequestMessage
    {
        this.fighterId = fighterId;
        this.fightId = fightId;
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
        this.serializeAs_GameFightJoinRequestMessage(output);
    }

    public serializeAs_GameFightJoinRequestMessage(output: ICustomDataOutput)
    {
        if(this.fighterId < -9007199254740992 || this.fighterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fighterId + ") on element fighterId.");
        }
        output.writeDouble(this.fighterId);
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightJoinRequestMessage(input);
    }

    private deserializeAs_GameFightJoinRequestMessage(input: ICustomDataInput)
    {
        this._fighterIdFunc(input);
        this._fightIdFunc(input);
    }

    private _fighterIdFunc(input: ICustomDataInput)
    {
        this.fighterId = input.readDouble();
        if(this.fighterId < -9007199254740992 || this.fighterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fighterId + ") on element of GameFightJoinRequestMessage.fighterId.");
        }
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightJoinRequestMessage.fightId.");
        }
    }

}