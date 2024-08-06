import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntDigRequestAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3567;

	public questType: number = 0;
	public result: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TreasureHuntDigRequestAnswerMessage.protocolId;
    }

    public initTreasureHuntDigRequestAnswerMessage(questType: number = 0, result: number = 0): TreasureHuntDigRequestAnswerMessage
    {
        this.questType = questType;
        this.result = result;
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
        this.serializeAs_TreasureHuntDigRequestAnswerMessage(output);
    }

    public serializeAs_TreasureHuntDigRequestAnswerMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.questType);
        output.writeByte(this.result);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntDigRequestAnswerMessage(input);
    }

    private deserializeAs_TreasureHuntDigRequestAnswerMessage(input: ICustomDataInput)
    {
        this._questTypeFunc(input);
        this._resultFunc(input);
    }

    private _questTypeFunc(input: ICustomDataInput)
    {
        this.questType = input.readByte();
        if(this.questType < 0)
        {
            throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntDigRequestAnswerMessage.questType.");
        }
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of TreasureHuntDigRequestAnswerMessage.result.");
        }
    }

}