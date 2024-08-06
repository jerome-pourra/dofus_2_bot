import { InteractiveElement } from "./../../../types/game/interactive/InteractiveElement";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveMapUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9493;

	public interactiveElements: Array<InteractiveElement>;

    public constructor()
    {
        super();
        this.interactiveElements = Array<InteractiveElement>();
    }

    public getMessageId()
    {
        return InteractiveMapUpdateMessage.protocolId;
    }

    public initInteractiveMapUpdateMessage(interactiveElements: Array<InteractiveElement> = null): InteractiveMapUpdateMessage
    {
        this.interactiveElements = interactiveElements;
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
        this.serializeAs_InteractiveMapUpdateMessage(output);
    }

    public serializeAs_InteractiveMapUpdateMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.interactiveElements.length);
        for(var _i1: number = 0; _i1 < this.interactiveElements.length; _i1++)
        {
            output.writeShort((this.interactiveElements[_i1] as InteractiveElement).getTypeId());
            (this.interactiveElements[_i1] as InteractiveElement).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveMapUpdateMessage(input);
    }

    private deserializeAs_InteractiveMapUpdateMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: InteractiveElement;
        let _interactiveElementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _interactiveElementsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(InteractiveElement,_id1);
            _item1.deserialize(input);
            this.interactiveElements.push(_item1);
        }
    }

}