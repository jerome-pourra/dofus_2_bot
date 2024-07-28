import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameFightTurnStartMessage } from "./GameFightTurnStartMessage";

export class GameFightTurnResumeMessage extends GameFightTurnStartMessage
{

	public static readonly protocolId: number = 7389;

	public remainingTime: number = 0;

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
        this.deserializeAs_GameFightTurnResumeMessage(input);
    }

    private deserializeAs_GameFightTurnResumeMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._remainingTimeFunc(input);
    }

    private _remainingTimeFunc(input: ICustomDataInput)
    {
        this.remainingTime = input.readVarUhInt();
        if(this.remainingTime < 0)
        {
            throw new Error("Forbidden value (" + this.remainingTime + ") on element of GameFightTurnResumeMessage.remainingTime.");
        }
    }

}