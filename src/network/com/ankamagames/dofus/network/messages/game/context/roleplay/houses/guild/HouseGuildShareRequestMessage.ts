import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class HouseGuildShareRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5369;

	public houseId: number = 0;
	public instanceId: number = 0;
	public enable: boolean = false;
	public rights: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseGuildShareRequestMessage.protocolId;
    }

    public initHouseGuildShareRequestMessage(houseId: number = 0, instanceId: number = 0, enable: boolean = false, rights: number = 0): HouseGuildShareRequestMessage
    {
        this.houseId = houseId;
        this.instanceId = instanceId;
        this.enable = enable;
        this.rights = rights;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HouseGuildShareRequestMessage(output);
    }

    public serializeAs_HouseGuildShareRequestMessage(output: ICustomDataOutput)
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
        output.writeBoolean(this.enable);
        if(this.rights < 0)
        {
            throw new Error("Forbidden value (" + this.rights + ") on element rights.");
        }
        output.writeVarInt(this.rights);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseGuildShareRequestMessage(input);
    }

    private deserializeAs_HouseGuildShareRequestMessage(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._instanceIdFunc(input);
        this._enableFunc(input);
        this._rightsFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseGuildShareRequestMessage.houseId.");
        }
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseGuildShareRequestMessage.instanceId.");
        }
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readBoolean();
    }

    private _rightsFunc(input: ICustomDataInput)
    {
        this.rights = input.readVarUhInt();
        if(this.rights < 0)
        {
            throw new Error("Forbidden value (" + this.rights + ") on element of HouseGuildShareRequestMessage.rights.");
        }
    }

}