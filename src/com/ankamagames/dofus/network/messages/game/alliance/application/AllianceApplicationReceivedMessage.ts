import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceApplicationReceivedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1686;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerName: string = "";
	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceApplicationReceivedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceApplicationReceivedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceApplicationReceivedMessage.endpointServer;
    }

    public initAllianceApplicationReceivedMessage(playerName: string = "", playerId: number = 0): AllianceApplicationReceivedMessage
    {
        this.playerName = playerName;
        this.playerId = playerId;
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
        this.serializeAs_AllianceApplicationReceivedMessage(output);
    }

    public serializeAs_AllianceApplicationReceivedMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.playerName);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceApplicationReceivedMessage(input);
    }

    private deserializeAs_AllianceApplicationReceivedMessage(input: ICustomDataInput)
    {
        this._playerNameFunc(input);
        this._playerIdFunc(input);
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of AllianceApplicationReceivedMessage.playerId.");
        }
    }

}