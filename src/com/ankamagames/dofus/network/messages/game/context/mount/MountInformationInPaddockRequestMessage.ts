import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountInformationInPaddockRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7545;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public mapRideId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountInformationInPaddockRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MountInformationInPaddockRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MountInformationInPaddockRequestMessage.endpointServer;
    }

    public initMountInformationInPaddockRequestMessage(mapRideId: number = 0): MountInformationInPaddockRequestMessage
    {
        this.mapRideId = mapRideId;
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
        this.serializeAs_MountInformationInPaddockRequestMessage(output);
    }

    public serializeAs_MountInformationInPaddockRequestMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.mapRideId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountInformationInPaddockRequestMessage(input);
    }

    private deserializeAs_MountInformationInPaddockRequestMessage(input: ICustomDataInput)
    {
        this._mapRideIdFunc(input);
    }

    private _mapRideIdFunc(input: ICustomDataInput)
    {
        this.mapRideId = input.readVarInt();
    }

}