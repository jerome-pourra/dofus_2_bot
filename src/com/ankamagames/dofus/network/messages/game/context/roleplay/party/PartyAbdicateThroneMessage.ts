import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyAbdicateThroneMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7804;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyAbdicateThroneMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyAbdicateThroneMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyAbdicateThroneMessage.endpointServer;
    }

    public initPartyAbdicateThroneMessage(partyId: number = 0, playerId: number = 0): PartyAbdicateThroneMessage
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
        this.serializeAs_PartyAbdicateThroneMessage(output);
    }

    public serializeAs_PartyAbdicateThroneMessage(output: ICustomDataOutput)
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
        this.deserializeAs_PartyAbdicateThroneMessage(input);
    }

    private deserializeAs_PartyAbdicateThroneMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of PartyAbdicateThroneMessage.playerId.");
        }
    }

}