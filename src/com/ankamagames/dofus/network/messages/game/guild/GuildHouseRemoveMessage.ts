import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildHouseRemoveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4888;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public houseId: number = 0;
	public instanceId: number = 0;
	public secondHand: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildHouseRemoveMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildHouseRemoveMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildHouseRemoveMessage.endpointServer;
    }

    public initGuildHouseRemoveMessage(houseId: number = 0, instanceId: number = 0, secondHand: boolean = false): GuildHouseRemoveMessage
    {
        this.houseId = houseId;
        this.instanceId = instanceId;
        this.secondHand = secondHand;
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
        this.serializeAs_GuildHouseRemoveMessage(output);
    }

    public serializeAs_GuildHouseRemoveMessage(output: ICustomDataOutput)
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
        output.writeBoolean(this.secondHand);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildHouseRemoveMessage(input);
    }

    private deserializeAs_GuildHouseRemoveMessage(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._instanceIdFunc(input);
        this._secondHandFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of GuildHouseRemoveMessage.houseId.");
        }
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of GuildHouseRemoveMessage.instanceId.");
        }
    }

    private _secondHandFunc(input: ICustomDataInput)
    {
        this.secondHand = input.readBoolean();
    }

}