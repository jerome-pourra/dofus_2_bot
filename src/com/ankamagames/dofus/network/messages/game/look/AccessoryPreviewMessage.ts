import { EntityLook } from "./../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AccessoryPreviewMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1503;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
    }

    public getMessageId()
    {
        return AccessoryPreviewMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AccessoryPreviewMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AccessoryPreviewMessage.endpointServer;
    }

    public initAccessoryPreviewMessage(look: EntityLook = null): AccessoryPreviewMessage
    {
        this.look = look;
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
        this.serializeAs_AccessoryPreviewMessage(output);
    }

    public serializeAs_AccessoryPreviewMessage(output: ICustomDataOutput)
    {
        this.look.serializeAs_EntityLook(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AccessoryPreviewMessage(input);
    }

    private deserializeAs_AccessoryPreviewMessage(input: ICustomDataInput)
    {
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

}