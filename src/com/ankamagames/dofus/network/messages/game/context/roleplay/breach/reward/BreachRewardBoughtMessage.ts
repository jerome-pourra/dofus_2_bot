import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachRewardBoughtMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 560;

	public id: number = 0;
	public bought: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachRewardBoughtMessage.protocolId;
    }

    public initBreachRewardBoughtMessage(id: number = 0, bought: boolean = false): BreachRewardBoughtMessage
    {
        this.id = id;
        this.bought = bought;
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
        this.serializeAs_BreachRewardBoughtMessage(output);
    }

    public serializeAs_BreachRewardBoughtMessage(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarInt(this.id);
        output.writeBoolean(this.bought);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachRewardBoughtMessage(input);
    }

    private deserializeAs_BreachRewardBoughtMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._boughtFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of BreachRewardBoughtMessage.id.");
        }
    }

    private _boughtFunc(input: ICustomDataInput)
    {
        this.bought = input.readBoolean();
    }

}