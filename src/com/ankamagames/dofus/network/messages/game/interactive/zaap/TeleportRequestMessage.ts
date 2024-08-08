import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9439;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public sourceType: number = 0;
	public destinationType: number = 0;
	public mapId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TeleportRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TeleportRequestMessage.endpointServer;
    }

    public initTeleportRequestMessage(sourceType: number = 0, destinationType: number = 0, mapId: number = 0): TeleportRequestMessage
    {
        this.sourceType = sourceType;
        this.destinationType = destinationType;
        this.mapId = mapId;
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
        this.serializeAs_TeleportRequestMessage(output);
    }

    public serializeAs_TeleportRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.sourceType);
        output.writeByte(this.destinationType);
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportRequestMessage(input);
    }

    private deserializeAs_TeleportRequestMessage(input: ICustomDataInput)
    {
        this._sourceTypeFunc(input);
        this._destinationTypeFunc(input);
        this._mapIdFunc(input);
    }

    private _sourceTypeFunc(input: ICustomDataInput)
    {
        this.sourceType = input.readByte();
        if(this.sourceType < 0)
        {
            throw new Error("Forbidden value (" + this.sourceType + ") on element of TeleportRequestMessage.sourceType.");
        }
    }

    private _destinationTypeFunc(input: ICustomDataInput)
    {
        this.destinationType = input.readByte();
        if(this.destinationType < 0)
        {
            throw new Error("Forbidden value (" + this.destinationType + ") on element of TeleportRequestMessage.destinationType.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of TeleportRequestMessage.mapId.");
        }
    }

}