import { InteractiveElement } from "./../../../types/game/interactive/InteractiveElement";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveMapUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9493;

	public interactiveElements: Array<InteractiveElement>;

    public constructor()
    {
        super();
        this.interactiveElements = Array<InteractiveElement>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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