import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyMemberRemoveMessage extends AbstractPartyEventMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7328;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public leavingPlayerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyMemberRemoveMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyMemberRemoveMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyMemberRemoveMessage.endpointServer;
    }

    public initPartyMemberRemoveMessage(partyId: number = 0, leavingPlayerId: number = 0): PartyMemberRemoveMessage
    {
        super.initAbstractPartyEventMessage(partyId);
        this.leavingPlayerId = leavingPlayerId;
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
        this.serializeAs_PartyMemberRemoveMessage(output);
    }

    public serializeAs_PartyMemberRemoveMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyEventMessage(output);
        if(this.leavingPlayerId < 0 || this.leavingPlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leavingPlayerId + ") on element leavingPlayerId.");
        }
        output.writeVarLong(this.leavingPlayerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyMemberRemoveMessage(input);
    }

    private deserializeAs_PartyMemberRemoveMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._leavingPlayerIdFunc(input);
    }

    private _leavingPlayerIdFunc(input: ICustomDataInput)
    {
        this.leavingPlayerId = input.readVarUhLong();
        if(this.leavingPlayerId < 0 || this.leavingPlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leavingPlayerId + ") on element of PartyMemberRemoveMessage.leavingPlayerId.");
        }
    }

}