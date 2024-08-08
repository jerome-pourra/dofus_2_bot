import { EntityInformation } from "./../../../types/game/entity/EntityInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class EntityInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6850;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public entity: EntityInformation;

    public constructor()
    {
        super();
        this.entity = new EntityInformation();
    }

    public getMessageId()
    {
        return EntityInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return EntityInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return EntityInformationMessage.endpointServer;
    }

    public initEntityInformationMessage(entity: EntityInformation = null): EntityInformationMessage
    {
        this.entity = entity;
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
        this.serializeAs_EntityInformationMessage(output);
    }

    public serializeAs_EntityInformationMessage(output: ICustomDataOutput)
    {
        this.entity.serializeAs_EntityInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EntityInformationMessage(input);
    }

    private deserializeAs_EntityInformationMessage(input: ICustomDataInput)
    {
        this.entity = new EntityInformation();
        this.entity.deserialize(input);
    }

}