import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class LivingObjectDissociateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8437;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public livingUID: number = 0;
	public livingPosition: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LivingObjectDissociateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return LivingObjectDissociateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return LivingObjectDissociateMessage.endpointServer;
    }

    public initLivingObjectDissociateMessage(livingUID: number = 0, livingPosition: number = 0): LivingObjectDissociateMessage
    {
        this.livingUID = livingUID;
        this.livingPosition = livingPosition;
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
        this.serializeAs_LivingObjectDissociateMessage(output);
    }

    public serializeAs_LivingObjectDissociateMessage(output: ICustomDataOutput)
    {
        if(this.livingUID < 0)
        {
            throw new Error("Forbidden value (" + this.livingUID + ") on element livingUID.");
        }
        output.writeVarInt(this.livingUID);
        if(this.livingPosition < 0 || this.livingPosition > 255)
        {
            throw new Error("Forbidden value (" + this.livingPosition + ") on element livingPosition.");
        }
        output.writeByte(this.livingPosition);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LivingObjectDissociateMessage(input);
    }

    private deserializeAs_LivingObjectDissociateMessage(input: ICustomDataInput)
    {
        this._livingUIDFunc(input);
        this._livingPositionFunc(input);
    }

    private _livingUIDFunc(input: ICustomDataInput)
    {
        this.livingUID = input.readVarUhInt();
        if(this.livingUID < 0)
        {
            throw new Error("Forbidden value (" + this.livingUID + ") on element of LivingObjectDissociateMessage.livingUID.");
        }
    }

    private _livingPositionFunc(input: ICustomDataInput)
    {
        this.livingPosition = input.readUnsignedByte();
        if(this.livingPosition < 0 || this.livingPosition > 255)
        {
            throw new Error("Forbidden value (" + this.livingPosition + ") on element of LivingObjectDissociateMessage.livingPosition.");
        }
    }

}