import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class HouseGuildRightsViewMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9956;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public houseId: number = 0;
	public instanceId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseGuildRightsViewMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HouseGuildRightsViewMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseGuildRightsViewMessage.endpointServer;
    }

    public initHouseGuildRightsViewMessage(houseId: number = 0, instanceId: number = 0): HouseGuildRightsViewMessage
    {
        this.houseId = houseId;
        this.instanceId = instanceId;
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
        this.serializeAs_HouseGuildRightsViewMessage(output);
    }

    public serializeAs_HouseGuildRightsViewMessage(output: ICustomDataOutput)
    {
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
        }
        output.writeVarInt(this.houseId);
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element instanceId.");
        }
        output.writeInt(this.instanceId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseGuildRightsViewMessage(input);
    }

    private deserializeAs_HouseGuildRightsViewMessage(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._instanceIdFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseGuildRightsViewMessage.houseId.");
        }
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseGuildRightsViewMessage.instanceId.");
        }
    }

}