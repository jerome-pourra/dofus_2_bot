import { TaxCollectorInformations } from "./../../../../types/game/collector/tax/TaxCollectorInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7370;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public callerId: number = 0;
	public description: TaxCollectorInformations;

    public constructor()
    {
        super();
        this.description = new TaxCollectorInformations();
    }

    public getMessageId()
    {
        return TaxCollectorAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorAddedMessage.endpointServer;
    }

    public initTaxCollectorAddedMessage(callerId: number = 0, description: TaxCollectorInformations = null): TaxCollectorAddedMessage
    {
        this.callerId = callerId;
        this.description = description;
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
        this.serializeAs_TaxCollectorAddedMessage(output);
    }

    public serializeAs_TaxCollectorAddedMessage(output: ICustomDataOutput)
    {
        if(this.callerId < 0 || this.callerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.callerId + ") on element callerId.");
        }
        output.writeVarLong(this.callerId);
        output.writeShort(this.description.getTypeId());
        this.description.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorAddedMessage(input);
    }

    private deserializeAs_TaxCollectorAddedMessage(input: ICustomDataInput)
    {
        this._callerIdFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.description = ProtocolTypeManager.getInstance(TaxCollectorInformations,_id2);
        this.description.deserialize(input);
    }

    private _callerIdFunc(input: ICustomDataInput)
    {
        this.callerId = input.readVarUhLong();
        if(this.callerId < 0 || this.callerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.callerId + ") on element of TaxCollectorAddedMessage.callerId.");
        }
    }

}