import { AtlasPointsInformations } from "./../../../types/game/context/roleplay/AtlasPointsInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AtlasPointInformationsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5424;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public type: AtlasPointsInformations;

    public constructor()
    {
        super();
        this.type = new AtlasPointsInformations();
    }

    public getMessageId()
    {
        return AtlasPointInformationsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AtlasPointInformationsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AtlasPointInformationsMessage.endpointServer;
    }

    public initAtlasPointInformationsMessage(type: AtlasPointsInformations = null): AtlasPointInformationsMessage
    {
        this.type = type;
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
        this.serializeAs_AtlasPointInformationsMessage(output);
    }

    public serializeAs_AtlasPointInformationsMessage(output: ICustomDataOutput)
    {
        this.type.serializeAs_AtlasPointsInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AtlasPointInformationsMessage(input);
    }

    private deserializeAs_AtlasPointInformationsMessage(input: ICustomDataInput)
    {
        this.type = new AtlasPointsInformations();
        this.type.deserialize(input);
    }

}