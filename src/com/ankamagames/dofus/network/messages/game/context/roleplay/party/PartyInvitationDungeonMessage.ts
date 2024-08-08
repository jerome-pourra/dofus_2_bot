import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyInvitationMessage } from "./PartyInvitationMessage";

export class PartyInvitationDungeonMessage extends PartyInvitationMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3539;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public dungeonId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyInvitationDungeonMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyInvitationDungeonMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyInvitationDungeonMessage.endpointServer;
    }

    public initPartyInvitationDungeonMessage(partyId: number = 0, partyType: number = 0, partyName: string = "", maxParticipants: number = 0, fromId: number = 0, fromName: string = "", toId: number = 0, dungeonId: number = 0): PartyInvitationDungeonMessage
    {
        super.initPartyInvitationMessage(partyId,partyType,partyName,maxParticipants,fromId,fromName,toId);
        this.dungeonId = dungeonId;
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
        this.serializeAs_PartyInvitationDungeonMessage(output);
    }

    public serializeAs_PartyInvitationDungeonMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PartyInvitationMessage(output);
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationDungeonMessage(input);
    }

    private deserializeAs_PartyInvitationDungeonMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._dungeonIdFunc(input);
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of PartyInvitationDungeonMessage.dungeonId.");
        }
    }

}