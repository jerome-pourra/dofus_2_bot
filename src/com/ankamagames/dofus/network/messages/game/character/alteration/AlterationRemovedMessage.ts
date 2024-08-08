import { AlterationInfo } from "./../../../../types/game/character/alteration/AlterationInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AlterationRemovedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9284;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public alteration: AlterationInfo;

    public constructor()
    {
        super();
        this.alteration = new AlterationInfo();
    }

    public getMessageId()
    {
        return AlterationRemovedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AlterationRemovedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AlterationRemovedMessage.endpointServer;
    }

    public initAlterationRemovedMessage(alteration: AlterationInfo = null): AlterationRemovedMessage
    {
        this.alteration = alteration;
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
        this.serializeAs_AlterationRemovedMessage(output);
    }

    public serializeAs_AlterationRemovedMessage(output: ICustomDataOutput)
    {
        this.alteration.serializeAs_AlterationInfo(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlterationRemovedMessage(input);
    }

    private deserializeAs_AlterationRemovedMessage(input: ICustomDataInput)
    {
        this.alteration = new AlterationInfo();
        this.alteration.deserialize(input);
    }

}