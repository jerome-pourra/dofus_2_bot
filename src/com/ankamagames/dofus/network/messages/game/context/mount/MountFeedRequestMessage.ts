import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountFeedRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3038;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public mountUid: number = 0;
	public mountLocation: number = 0;
	public mountFoodUid: number = 0;
	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountFeedRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MountFeedRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MountFeedRequestMessage.endpointServer;
    }

    public initMountFeedRequestMessage(mountUid: number = 0, mountLocation: number = 0, mountFoodUid: number = 0, quantity: number = 0): MountFeedRequestMessage
    {
        this.mountUid = mountUid;
        this.mountLocation = mountLocation;
        this.mountFoodUid = mountFoodUid;
        this.quantity = quantity;
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
        this.serializeAs_MountFeedRequestMessage(output);
    }

    public serializeAs_MountFeedRequestMessage(output: ICustomDataOutput)
    {
        if(this.mountUid < 0)
        {
            throw new Error("Forbidden value (" + this.mountUid + ") on element mountUid.");
        }
        output.writeVarInt(this.mountUid);
        output.writeByte(this.mountLocation);
        if(this.mountFoodUid < 0)
        {
            throw new Error("Forbidden value (" + this.mountFoodUid + ") on element mountFoodUid.");
        }
        output.writeVarInt(this.mountFoodUid);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountFeedRequestMessage(input);
    }

    private deserializeAs_MountFeedRequestMessage(input: ICustomDataInput)
    {
        this._mountUidFunc(input);
        this._mountLocationFunc(input);
        this._mountFoodUidFunc(input);
        this._quantityFunc(input);
    }

    private _mountUidFunc(input: ICustomDataInput)
    {
        this.mountUid = input.readVarUhInt();
        if(this.mountUid < 0)
        {
            throw new Error("Forbidden value (" + this.mountUid + ") on element of MountFeedRequestMessage.mountUid.");
        }
    }

    private _mountLocationFunc(input: ICustomDataInput)
    {
        this.mountLocation = input.readByte();
    }

    private _mountFoodUidFunc(input: ICustomDataInput)
    {
        this.mountFoodUid = input.readVarUhInt();
        if(this.mountFoodUid < 0)
        {
            throw new Error("Forbidden value (" + this.mountFoodUid + ") on element of MountFeedRequestMessage.mountFoodUid.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of MountFeedRequestMessage.quantity.");
        }
    }

}