import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeBonusChoiceSelectedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4926;

	public challengeBonus: number = 0;

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
        this.deserializeAs_ChallengeBonusChoiceSelectedMessage(input);
    }

    private deserializeAs_ChallengeBonusChoiceSelectedMessage(input: ICustomDataInput)
    {
        this._challengeBonusFunc(input);
    }

    private _challengeBonusFunc(input: ICustomDataInput)
    {
        this.challengeBonus = input.readByte();
        if(this.challengeBonus < 0)
        {
            throw new Error("Forbidden value (" + this.challengeBonus + ") on element of ChallengeBonusChoiceSelectedMessage.challengeBonus.");
        }
    }

}