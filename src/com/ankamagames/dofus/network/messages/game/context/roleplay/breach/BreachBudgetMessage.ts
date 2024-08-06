import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachBudgetMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9989;

	public bugdet: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachBudgetMessage.protocolId;
    }

    public initBreachBudgetMessage(bugdet: number = 0): BreachBudgetMessage
    {
        this.bugdet = bugdet;
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
        this.serializeAs_BreachBudgetMessage(output);
    }

    public serializeAs_BreachBudgetMessage(output: ICustomDataOutput)
    {
        if(this.bugdet < 0)
        {
            throw new Error("Forbidden value (" + this.bugdet + ") on element bugdet.");
        }
        output.writeVarInt(this.bugdet);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachBudgetMessage(input);
    }

    private deserializeAs_BreachBudgetMessage(input: ICustomDataInput)
    {
        this._bugdetFunc(input);
    }

    private _bugdetFunc(input: ICustomDataInput)
    {
        this.bugdet = input.readVarUhInt();
        if(this.bugdet < 0)
        {
            throw new Error("Forbidden value (" + this.bugdet + ") on element of BreachBudgetMessage.bugdet.");
        }
    }

}