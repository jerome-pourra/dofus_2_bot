import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyStopFollowRequestMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8393;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyStopFollowRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyStopFollowRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyStopFollowRequestMessage.endpointServer;
    }

    public initPartyStopFollowRequestMessage(partyId: number = 0, playerId: number = 0): PartyStopFollowRequestMessage
    {
        super.initAbstractPartyMessage(partyId);
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
        this.serializeAs_PartyStopFollowRequestMessage(output);
    }

    public serializeAs_PartyStopFollowRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyStopFollowRequestMessage(input);
    }

    private deserializeAs_PartyStopFollowRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of PartyStopFollowRequestMessage.playerId.");
        }
    }

}