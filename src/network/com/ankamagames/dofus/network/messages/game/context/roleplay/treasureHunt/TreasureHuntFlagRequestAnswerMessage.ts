import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntFlagRequestAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6871;

	public questType: number = 0;
	public result: number = 0;
	public index: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TreasureHuntFlagRequestAnswerMessage.protocolId;
    }

    public initTreasureHuntFlagRequestAnswerMessage(questType: number = 0, result: number = 0, index: number = 0): TreasureHuntFlagRequestAnswerMessage
    {
        this.questType = questType;
        this.result = result;
        this.index = index;
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
        this.serializeAs_TreasureHuntFlagRequestAnswerMessage(output);
    }

    public serializeAs_TreasureHuntFlagRequestAnswerMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.questType);
        output.writeByte(this.result);
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element index.");
        }
        output.writeByte(this.index);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntFlagRequestAnswerMessage(input);
    }

    private deserializeAs_TreasureHuntFlagRequestAnswerMessage(input: ICustomDataInput)
    {
        this._questTypeFunc(input);
        this._resultFunc(input);
        this._indexFunc(input);
    }

    private _questTypeFunc(input: ICustomDataInput)
    {
        this.questType = input.readByte();
        if(this.questType < 0)
        {
            throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFlagRequestAnswerMessage.questType.");
        }
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of TreasureHuntFlagRequestAnswerMessage.result.");
        }
    }

    private _indexFunc(input: ICustomDataInput)
    {
        this.index = input.readByte();
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element of TreasureHuntFlagRequestAnswerMessage.index.");
        }
    }

}