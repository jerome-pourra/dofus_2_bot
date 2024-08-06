import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachRewardBuyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3872;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachRewardBuyMessage.protocolId;
    }

    public initBreachRewardBuyMessage(id: number = 0): BreachRewardBuyMessage
    {
        this.id = id;
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
        this.serializeAs_BreachRewardBuyMessage(output);
    }

    public serializeAs_BreachRewardBuyMessage(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarInt(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachRewardBuyMessage(input);
    }

    private deserializeAs_BreachRewardBuyMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of BreachRewardBuyMessage.id.");
        }
    }

}