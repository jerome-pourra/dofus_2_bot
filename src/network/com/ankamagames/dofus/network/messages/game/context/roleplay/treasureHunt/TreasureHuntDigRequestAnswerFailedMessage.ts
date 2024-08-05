import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { TreasureHuntDigRequestAnswerMessage } from "./TreasureHuntDigRequestAnswerMessage";

export class TreasureHuntDigRequestAnswerFailedMessage extends TreasureHuntDigRequestAnswerMessage
{

	public static readonly protocolId: number = 2459;

	public wrongFlagCount: number = 0;

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
        this.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(input);
    }

    private deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._wrongFlagCountFunc(input);
    }

    private _wrongFlagCountFunc(input: ICustomDataInput)
    {
        this.wrongFlagCount = input.readByte();
        if(this.wrongFlagCount < 0)
        {
            throw new Error("Forbidden value (" + this.wrongFlagCount + ") on element of TreasureHuntDigRequestAnswerFailedMessage.wrongFlagCount.");
        }
    }

}