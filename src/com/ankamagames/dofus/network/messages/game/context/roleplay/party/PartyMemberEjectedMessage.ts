import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyMemberRemoveMessage } from "./PartyMemberRemoveMessage";

export class PartyMemberEjectedMessage extends PartyMemberRemoveMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9438;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public kickerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyMemberEjectedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyMemberEjectedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyMemberEjectedMessage.endpointServer;
    }

    public initPartyMemberEjectedMessage(partyId: number = 0, leavingPlayerId: number = 0, kickerId: number = 0): PartyMemberEjectedMessage
    {
        super.initPartyMemberRemoveMessage(partyId,leavingPlayerId);
        this.kickerId = kickerId;
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
        this.serializeAs_PartyMemberEjectedMessage(output);
    }

    public serializeAs_PartyMemberEjectedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PartyMemberRemoveMessage(output);
        if(this.kickerId < 0 || this.kickerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickerId + ") on element kickerId.");
        }
        output.writeVarLong(this.kickerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyMemberEjectedMessage(input);
    }

    private deserializeAs_PartyMemberEjectedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._kickerIdFunc(input);
    }

    private _kickerIdFunc(input: ICustomDataInput)
    {
        this.kickerId = input.readVarUhLong();
        if(this.kickerId < 0 || this.kickerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickerId + ") on element of PartyMemberEjectedMessage.kickerId.");
        }
    }

}