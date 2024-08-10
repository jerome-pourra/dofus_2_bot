import { TeleportDestination } from "./../../../../types/game/interactive/zaap/TeleportDestination";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportDestinationsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7615;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public type: number = 0;
	public destinations: Array<TeleportDestination>;

    public constructor()
    {
        super();
        this.destinations = Array<TeleportDestination>();
    }

    public getMessageId()
    {
        return TeleportDestinationsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TeleportDestinationsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TeleportDestinationsMessage.endpointServer;
    }

    public initTeleportDestinationsMessage(type: number = 0, destinations: Array<TeleportDestination> = null): TeleportDestinationsMessage
    {
        this.type = type;
        this.destinations = destinations;
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
        this.serializeAs_TeleportDestinationsMessage(output);
    }

    public serializeAs_TeleportDestinationsMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
        output.writeShort(this.destinations.length);
        for(var _i2: number = 0; _i2 < this.destinations.length; _i2++)
        {
            (this.destinations[_i2] as TeleportDestination).serializeAs_TeleportDestination(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportDestinationsMessage(input);
    }

    private deserializeAs_TeleportDestinationsMessage(input: ICustomDataInput)
    {
        let _item2: TeleportDestination;
        this._typeFunc(input);
        let _destinationsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _destinationsLen; _i2++)
        {
            _item2 = new TeleportDestination();
            _item2.deserialize(input);
            this.destinations.push(_item2);
        }
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of TeleportDestinationsMessage.type.");
        }
    }

}