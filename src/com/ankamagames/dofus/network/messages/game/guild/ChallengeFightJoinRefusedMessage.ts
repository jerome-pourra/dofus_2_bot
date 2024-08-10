import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ChallengeFightJoinRefusedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2072;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerId: number = 0;
	public reason: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeFightJoinRefusedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeFightJoinRefusedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeFightJoinRefusedMessage.endpointServer;
    }

    public initChallengeFightJoinRefusedMessage(playerId: number = 0, reason: number = 0): ChallengeFightJoinRefusedMessage
    {
        this.playerId = playerId;
        this.reason = reason;
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
        this.serializeAs_ChallengeFightJoinRefusedMessage(output);
    }

    public serializeAs_ChallengeFightJoinRefusedMessage(output: ICustomDataOutput)
    {
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeFightJoinRefusedMessage(input);
    }

    private deserializeAs_ChallengeFightJoinRefusedMessage(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
        this._reasonFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of ChallengeFightJoinRefusedMessage.playerId.");
        }
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
    }

}