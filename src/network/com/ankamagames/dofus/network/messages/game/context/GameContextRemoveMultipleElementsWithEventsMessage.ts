import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GameContextRemoveMultipleElementsMessage } from "./GameContextRemoveMultipleElementsMessage";

export class GameContextRemoveMultipleElementsWithEventsMessage extends GameContextRemoveMultipleElementsMessage
{

	public static readonly protocolId: number = 1167;

	public elementEventIds: Array<number>;

    public constructor()
    {
        super();
        this.elementEventIds = Array<number>();
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
        this.deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage(input);
    }

    private deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        super.deserialize(input);
        let _elementEventIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _elementEventIdsLen; _i1++)
        {
            _val1 = input.readByte();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of elementEventIds.");
            }
            this.elementEventIds.push(_val1);
        }
    }

}