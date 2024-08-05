import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachKickRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4588;

	public target: number = 0;

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
        this.deserializeAs_BreachKickRequestMessage(input);
    }

    private deserializeAs_BreachKickRequestMessage(input: ICustomDataInput)
    {
        this._targetFunc(input);
    }

    private _targetFunc(input: ICustomDataInput)
    {
        this.target = input.readVarUhLong();
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element of BreachKickRequestMessage.target.");
        }
    }

}