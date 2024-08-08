import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class LivingObjectChangeSkinRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2511;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public livingUID: number = 0;
	public livingPosition: number = 0;
	public skinId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LivingObjectChangeSkinRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return LivingObjectChangeSkinRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return LivingObjectChangeSkinRequestMessage.endpointServer;
    }

    public initLivingObjectChangeSkinRequestMessage(livingUID: number = 0, livingPosition: number = 0, skinId: number = 0): LivingObjectChangeSkinRequestMessage
    {
        this.livingUID = livingUID;
        this.livingPosition = livingPosition;
        this.skinId = skinId;
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
        this.serializeAs_LivingObjectChangeSkinRequestMessage(output);
    }

    public serializeAs_LivingObjectChangeSkinRequestMessage(output: ICustomDataOutput)
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
        if(this.skinId < 0)
        {
            throw new Error("Forbidden value (" + this.skinId + ") on element skinId.");
        }
        output.writeVarInt(this.skinId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LivingObjectChangeSkinRequestMessage(input);
    }

    private deserializeAs_LivingObjectChangeSkinRequestMessage(input: ICustomDataInput)
    {
        this._livingUIDFunc(input);
        this._livingPositionFunc(input);
        this._skinIdFunc(input);
    }

    private _livingUIDFunc(input: ICustomDataInput)
    {
        this.livingUID = input.readVarUhInt();
        if(this.livingUID < 0)
        {
            throw new Error("Forbidden value (" + this.livingUID + ") on element of LivingObjectChangeSkinRequestMessage.livingUID.");
        }
    }

    private _livingPositionFunc(input: ICustomDataInput)
    {
        this.livingPosition = input.readUnsignedByte();
        if(this.livingPosition < 0 || this.livingPosition > 255)
        {
            throw new Error("Forbidden value (" + this.livingPosition + ") on element of LivingObjectChangeSkinRequestMessage.livingPosition.");
        }
    }

    private _skinIdFunc(input: ICustomDataInput)
    {
        this.skinId = input.readVarUhInt();
        if(this.skinId < 0)
        {
            throw new Error("Forbidden value (" + this.skinId + ") on element of LivingObjectChangeSkinRequestMessage.skinId.");
        }
    }

}