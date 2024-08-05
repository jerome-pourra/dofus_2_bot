import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachBudgetMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9989;

	public bugdet: number = 0;

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