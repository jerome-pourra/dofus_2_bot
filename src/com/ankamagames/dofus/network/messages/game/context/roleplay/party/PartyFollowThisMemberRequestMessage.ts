import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyFollowMemberRequestMessage } from "./PartyFollowMemberRequestMessage";

export class PartyFollowThisMemberRequestMessage extends PartyFollowMemberRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 327;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public enabled: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyFollowThisMemberRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyFollowThisMemberRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyFollowThisMemberRequestMessage.endpointServer;
    }

    public initPartyFollowThisMemberRequestMessage(partyId: number = 0, playerId: number = 0, enabled: boolean = false): PartyFollowThisMemberRequestMessage
    {
        super.initPartyFollowMemberRequestMessage(partyId,playerId);
        this.enabled = enabled;
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
        this.serializeAs_PartyFollowThisMemberRequestMessage(output);
    }

    public serializeAs_PartyFollowThisMemberRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PartyFollowMemberRequestMessage(output);
        output.writeBoolean(this.enabled);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyFollowThisMemberRequestMessage(input);
    }

    private deserializeAs_PartyFollowThisMemberRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._enabledFunc(input);
    }

    private _enabledFunc(input: ICustomDataInput)
    {
        this.enabled = input.readBoolean();
    }

}