import { MapCoordinates } from "./../../../../types/game/context/MapCoordinates";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CompassUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 872;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public type: number = 0;
	public coords: MapCoordinates;

    public constructor()
    {
        super();
        this.coords = new MapCoordinates();
    }

    public getMessageId()
    {
        return CompassUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CompassUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CompassUpdateMessage.endpointServer;
    }

    public initCompassUpdateMessage(type: number = 0, coords: MapCoordinates = null): CompassUpdateMessage
    {
        this.type = type;
        this.coords = coords;
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
        this.serializeAs_CompassUpdateMessage(output);
    }

    public serializeAs_CompassUpdateMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
        output.writeShort(this.coords.getTypeId());
        this.coords.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CompassUpdateMessage(input);
    }

    private deserializeAs_CompassUpdateMessage(input: ICustomDataInput)
    {
        this._typeFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.coords = ProtocolTypeManager.getInstance(MapCoordinates,_id2);
        this.coords.deserialize(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of CompassUpdateMessage.type.");
        }
    }

}