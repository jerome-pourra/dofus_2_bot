import { TeleportDestination } from "./../../../../types/game/interactive/zaap/TeleportDestination";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { TeleportDestinationsMessage } from "./TeleportDestinationsMessage";

export class ZaapDestinationsMessage extends TeleportDestinationsMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9132;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public spawnMapId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ZaapDestinationsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ZaapDestinationsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ZaapDestinationsMessage.endpointServer;
    }

    public initZaapDestinationsMessage(type: number = 0, destinations: Array<TeleportDestination> = null, spawnMapId: number = 0): ZaapDestinationsMessage
    {
        super.initTeleportDestinationsMessage(type,destinations);
        this.spawnMapId = spawnMapId;
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
        this.serializeAs_ZaapDestinationsMessage(output);
    }

    public serializeAs_ZaapDestinationsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_TeleportDestinationsMessage(output);
        if(this.spawnMapId < 0 || this.spawnMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.spawnMapId + ") on element spawnMapId.");
        }
        output.writeDouble(this.spawnMapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ZaapDestinationsMessage(input);
    }

    private deserializeAs_ZaapDestinationsMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._spawnMapIdFunc(input);
    }

    private _spawnMapIdFunc(input: ICustomDataInput)
    {
        this.spawnMapId = input.readDouble();
        if(this.spawnMapId < 0 || this.spawnMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.spawnMapId + ") on element of ZaapDestinationsMessage.spawnMapId.");
        }
    }

}