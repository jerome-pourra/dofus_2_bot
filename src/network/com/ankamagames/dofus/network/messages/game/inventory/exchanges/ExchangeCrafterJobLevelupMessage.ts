import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeCrafterJobLevelupMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2584;

	public crafterJobLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeCrafterJobLevelupMessage.protocolId;
    }

    public initExchangeCrafterJobLevelupMessage(crafterJobLevel: number = 0): ExchangeCrafterJobLevelupMessage
    {
        this.crafterJobLevel = crafterJobLevel;
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
        this.serializeAs_ExchangeCrafterJobLevelupMessage(output);
    }

    public serializeAs_ExchangeCrafterJobLevelupMessage(output: ICustomDataOutput)
    {
        if(this.crafterJobLevel < 0 || this.crafterJobLevel > 255)
        {
            throw new Error("Forbidden value (" + this.crafterJobLevel + ") on element crafterJobLevel.");
        }
        output.writeByte(this.crafterJobLevel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeCrafterJobLevelupMessage(input);
    }

    private deserializeAs_ExchangeCrafterJobLevelupMessage(input: ICustomDataInput)
    {
        this._crafterJobLevelFunc(input);
    }

    private _crafterJobLevelFunc(input: ICustomDataInput)
    {
        this.crafterJobLevel = input.readUnsignedByte();
        if(this.crafterJobLevel < 0 || this.crafterJobLevel > 255)
        {
            throw new Error("Forbidden value (" + this.crafterJobLevel + ") on element of ExchangeCrafterJobLevelupMessage.crafterJobLevel.");
        }
    }

}