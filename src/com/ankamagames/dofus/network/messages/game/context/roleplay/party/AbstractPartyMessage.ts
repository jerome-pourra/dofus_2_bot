import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class AbstractPartyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2039;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public partyId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AbstractPartyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AbstractPartyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AbstractPartyMessage.endpointServer;
    }

    public initAbstractPartyMessage(partyId: number = 0): AbstractPartyMessage
    {
        this.partyId = partyId;
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
        this.serializeAs_AbstractPartyMessage(output);
    }

    public serializeAs_AbstractPartyMessage(output: ICustomDataOutput)
    {
        if(this.partyId < 0)
        {
            throw new Error("Forbidden value (" + this.partyId + ") on element partyId.");
        }
        output.writeVarInt(this.partyId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractPartyMessage(input);
    }

    private deserializeAs_AbstractPartyMessage(input: ICustomDataInput)
    {
        this._partyIdFunc(input);
    }

    private _partyIdFunc(input: ICustomDataInput)
    {
        this.partyId = input.readVarUhInt();
        if(this.partyId < 0)
        {
            throw new Error("Forbidden value (" + this.partyId + ") on element of AbstractPartyMessage.partyId.");
        }
    }

}