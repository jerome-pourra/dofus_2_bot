import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicStatMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2233;

	public timeSpent: number = 0;
	public statId: number = 0;

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
        this.deserializeAs_BasicStatMessage(input);
    }

    private deserializeAs_BasicStatMessage(input: ICustomDataInput)
    {
        this._timeSpentFunc(input);
        this._statIdFunc(input);
    }

    private _timeSpentFunc(input: ICustomDataInput)
    {
        this.timeSpent = input.readDouble();
        if(this.timeSpent < 0 || this.timeSpent > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.timeSpent + ") on element of BasicStatMessage.timeSpent.");
        }
    }

    private _statIdFunc(input: ICustomDataInput)
    {
        this.statId = input.readVarUhShort();
        if(this.statId < 0)
        {
            throw new Error("Forbidden value (" + this.statId + ") on element of BasicStatMessage.statId.");
        }
    }

}