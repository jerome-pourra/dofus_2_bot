import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StorageKamasUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8968;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public kamasTotal: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StorageKamasUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StorageKamasUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StorageKamasUpdateMessage.endpointServer;
    }

    public initStorageKamasUpdateMessage(kamasTotal: number = 0): StorageKamasUpdateMessage
    {
        this.kamasTotal = kamasTotal;
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
        this.serializeAs_StorageKamasUpdateMessage(output);
    }

    public serializeAs_StorageKamasUpdateMessage(output: ICustomDataOutput)
    {
        if(this.kamasTotal < 0 || this.kamasTotal > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamasTotal + ") on element kamasTotal.");
        }
        output.writeVarLong(this.kamasTotal);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StorageKamasUpdateMessage(input);
    }

    private deserializeAs_StorageKamasUpdateMessage(input: ICustomDataInput)
    {
        this._kamasTotalFunc(input);
    }

    private _kamasTotalFunc(input: ICustomDataInput)
    {
        this.kamasTotal = input.readVarUhLong();
        if(this.kamasTotal < 0 || this.kamasTotal > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamasTotal + ") on element of StorageKamasUpdateMessage.kamasTotal.");
        }
    }

}