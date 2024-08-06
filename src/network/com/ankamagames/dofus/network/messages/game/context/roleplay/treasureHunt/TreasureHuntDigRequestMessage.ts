import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntDigRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6696;

	public questType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TreasureHuntDigRequestMessage.protocolId;
    }

    public initTreasureHuntDigRequestMessage(questType: number = 0): TreasureHuntDigRequestMessage
    {
        this.questType = questType;
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
        this.serializeAs_TreasureHuntDigRequestMessage(output);
    }

    public serializeAs_TreasureHuntDigRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.questType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntDigRequestMessage(input);
    }

    private deserializeAs_TreasureHuntDigRequestMessage(input: ICustomDataInput)
    {
        this._questTypeFunc(input);
    }

    private _questTypeFunc(input: ICustomDataInput)
    {
        this.questType = input.readByte();
        if(this.questType < 0)
        {
            throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntDigRequestMessage.questType.");
        }
    }

}