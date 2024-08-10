import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CurrentMapMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7991;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public mapId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CurrentMapMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CurrentMapMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CurrentMapMessage.endpointServer;
    }

    public initCurrentMapMessage(mapId: number = 0): CurrentMapMessage
    {
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
        this.serializeAs_CurrentMapMessage(output);
    }

    public serializeAs_CurrentMapMessage(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CurrentMapMessage(input);
    }

    private deserializeAs_CurrentMapMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of CurrentMapMessage.mapId.");
        }
    }

}