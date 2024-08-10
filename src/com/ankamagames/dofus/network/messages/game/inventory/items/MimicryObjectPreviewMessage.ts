import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MimicryObjectPreviewMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2255;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public result: ObjectItem;

    public constructor()
    {
        super();
        this.result = new ObjectItem();
    }

    public getMessageId()
    {
        return MimicryObjectPreviewMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MimicryObjectPreviewMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MimicryObjectPreviewMessage.endpointServer;
    }

    public initMimicryObjectPreviewMessage(result: ObjectItem = null): MimicryObjectPreviewMessage
    {
        this.result = result;
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
        this.serializeAs_MimicryObjectPreviewMessage(output);
    }

    public serializeAs_MimicryObjectPreviewMessage(output: ICustomDataOutput)
    {
        this.result.serializeAs_ObjectItem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MimicryObjectPreviewMessage(input);
    }

    private deserializeAs_MimicryObjectPreviewMessage(input: ICustomDataInput)
    {
        this.result = new ObjectItem();
        this.result.deserialize(input);
    }

}