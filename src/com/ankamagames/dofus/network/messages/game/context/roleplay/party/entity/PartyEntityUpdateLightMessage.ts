import { PartyUpdateLightMessage } from "./../PartyUpdateLightMessage";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";

export class PartyEntityUpdateLightMessage extends PartyUpdateLightMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2046;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public indexId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyEntityUpdateLightMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyEntityUpdateLightMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyEntityUpdateLightMessage.endpointServer;
    }

    public initPartyEntityUpdateLightMessage(partyId: number = 0, id: number = 0, lifePoints: number = 0, maxLifePoints: number = 0, prospecting: number = 0, regenRate: number = 0, indexId: number = 0): PartyEntityUpdateLightMessage
    {
        super.initPartyUpdateLightMessage(partyId,id,lifePoints,maxLifePoints,prospecting,regenRate);
        this.indexId = indexId;
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
        this.serializeAs_PartyEntityUpdateLightMessage(output);
    }

    public serializeAs_PartyEntityUpdateLightMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PartyUpdateLightMessage(output);
        if(this.indexId < 0)
        {
            throw new Error("Forbidden value (" + this.indexId + ") on element indexId.");
        }
        output.writeByte(this.indexId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyEntityUpdateLightMessage(input);
    }

    private deserializeAs_PartyEntityUpdateLightMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._indexIdFunc(input);
    }

    private _indexIdFunc(input: ICustomDataInput)
    {
        this.indexId = input.readByte();
        if(this.indexId < 0)
        {
            throw new Error("Forbidden value (" + this.indexId + ") on element of PartyEntityUpdateLightMessage.indexId.");
        }
    }

}