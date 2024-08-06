import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GameContextRemoveElementMessage } from "./GameContextRemoveElementMessage";

export class GameContextRemoveElementWithEventMessage extends GameContextRemoveElementMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7775;

	public elementEventId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameContextRemoveElementWithEventMessage.protocolId;
    }

    public initGameContextRemoveElementWithEventMessage(id: number = 0, elementEventId: number = 0): GameContextRemoveElementWithEventMessage
    {
        super.initGameContextRemoveElementMessage(id);
        this.elementEventId = elementEventId;
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
        this.serializeAs_GameContextRemoveElementWithEventMessage(output);
    }

    public serializeAs_GameContextRemoveElementWithEventMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameContextRemoveElementMessage(output);
        if(this.elementEventId < 0)
        {
            throw new Error("Forbidden value (" + this.elementEventId + ") on element elementEventId.");
        }
        output.writeByte(this.elementEventId);
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