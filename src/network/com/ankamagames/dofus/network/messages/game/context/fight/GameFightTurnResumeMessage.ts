import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameFightTurnStartMessage } from "./GameFightTurnStartMessage";

export class GameFightTurnResumeMessage extends GameFightTurnStartMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7389;

	public remainingTime: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightTurnResumeMessage.protocolId;
    }

    public initGameFightTurnResumeMessage(id: number = 0, waitTime: number = 0, remainingTime: number = 0): GameFightTurnResumeMessage
    {
        super.initGameFightTurnStartMessage(id,waitTime);
        this.remainingTime = remainingTime;
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
        this.serializeAs_GameFightTurnResumeMessage(output);
    }

    public serializeAs_GameFightTurnResumeMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightTurnStartMessage(output);
        if(this.remainingTime < 0)
        {
            throw new Error("Forbidden value (" + this.remainingTime + ") on element remainingTime.");
        }
        output.writeVarInt(this.remainingTime);
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