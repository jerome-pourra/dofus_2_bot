import { AbstractPlayerSearchInformation } from "./../../../../../types/common/AbstractPlayerSearchInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyInvitationRequestMessage } from "./PartyInvitationRequestMessage";

export class PartyInvitationDungeonRequestMessage extends PartyInvitationRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5145;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public dungeonId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyInvitationDungeonRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyInvitationDungeonRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyInvitationDungeonRequestMessage.endpointServer;
    }

    public initPartyInvitationDungeonRequestMessage(target: AbstractPlayerSearchInformation = null, dungeonId: number = 0): PartyInvitationDungeonRequestMessage
    {
        super.initPartyInvitationRequestMessage(target);
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
        this.serializeAs_PartyInvitationDungeonRequestMessage(output);
    }

    public serializeAs_PartyInvitationDungeonRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PartyInvitationRequestMessage(output);
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationDungeonRequestMessage(input);
    }

    private deserializeAs_PartyInvitationDungeonRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._dungeonIdFunc(input);
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of PartyInvitationDungeonRequestMessage.dungeonId.");
        }
    }

}