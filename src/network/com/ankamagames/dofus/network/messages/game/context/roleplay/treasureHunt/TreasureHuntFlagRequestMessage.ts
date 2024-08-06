import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntFlagRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6775;

	public questType: number = 0;
	public index: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TreasureHuntFlagRequestMessage.protocolId;
    }

    public initTreasureHuntFlagRequestMessage(questType: number = 0, index: number = 0): TreasureHuntFlagRequestMessage
    {
        this.questType = questType;
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
        this.serializeAs_TreasureHuntFlagRequestMessage(output);
    }

    public serializeAs_TreasureHuntFlagRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.questType);
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element index.");
        }
        output.writeByte(this.index);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntFlagRequestMessage(input);
    }

    private deserializeAs_TreasureHuntFlagRequestMessage(input: ICustomDataInput)
    {
        this._questTypeFunc(input);
        this._indexFunc(input);
    }

    private _questTypeFunc(input: ICustomDataInput)
    {
        this.questType = input.readByte();
        if(this.questType < 0)
        {
            throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFlagRequestMessage.questType.");
        }
    }

    private _indexFunc(input: ICustomDataInput)
    {
        this.index = input.readByte();
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element of TreasureHuntFlagRequestMessage.index.");
        }
    }

}