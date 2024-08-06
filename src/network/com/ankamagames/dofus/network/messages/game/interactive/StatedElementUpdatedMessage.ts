import { StatedElement } from "./../../../types/game/interactive/StatedElement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StatedElementUpdatedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7859;

	public statedElement: StatedElement;

    public constructor()
    {
        super();
        this.statedElement = new StatedElement();
    }

    public getMessageId()
    {
        return StatedElementUpdatedMessage.protocolId;
    }

    public initStatedElementUpdatedMessage(statedElement: StatedElement = null): StatedElementUpdatedMessage
    {
        this.statedElement = statedElement;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatedElementUpdatedMessage(output);
    }

    public serializeAs_StatedElementUpdatedMessage(output: ICustomDataOutput)
    {
        this.statedElement.serializeAs_StatedElement(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatedElementUpdatedMessage(input);
    }

    private deserializeAs_StatedElementUpdatedMessage(input: ICustomDataInput)
    {
        this.statedElement = new StatedElement();
        this.statedElement.deserialize(input);
    }

}