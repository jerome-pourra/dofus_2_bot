import { StatedElement } from "./../../../types/game/interactive/StatedElement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StatedMapUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2054;

	public statedElements: Array<StatedElement>;

    public constructor()
    {
        super();
        this.statedElements = Array<StatedElement>();
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
        this.deserializeAs_StatedMapUpdateMessage(input);
    }

    private deserializeAs_StatedMapUpdateMessage(input: ICustomDataInput)
    {
        let _item1: StatedElement;
        let _statedElementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _statedElementsLen; _i1++)
        {
            _item1 = new StatedElement();
            _item1.deserialize(input);
            this.statedElements.push(_item1);
        }
    }

}