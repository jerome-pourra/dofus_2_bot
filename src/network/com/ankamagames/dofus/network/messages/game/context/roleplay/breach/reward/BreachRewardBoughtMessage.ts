import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachRewardBoughtMessage extends NetworkMessage
{

	public static readonly protocolId: number = 560;

	public id: number = 0;
	public bought: boolean = false;

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