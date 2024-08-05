import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GameContextRemoveElementMessage } from "./GameContextRemoveElementMessage";

export class GameContextRemoveElementWithEventMessage extends GameContextRemoveElementMessage
{

	public static readonly protocolId: number = 7775;

	public elementEventId: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_GameContextRemoveElementWithEventMessage(input);
    }

    private deserializeAs_GameContextRemoveElementWithEventMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._elementEventIdFunc(input);
    }

    private _elementEventIdFunc(input: ICustomDataInput)
    {
        this.elementEventId = input.readByte();
        if(this.elementEventId < 0)
        {
            throw new Error("Forbidden value (" + this.elementEventId + ") on element of GameContextRemoveElementWithEventMessage.elementEventId.");
        }
    }

}