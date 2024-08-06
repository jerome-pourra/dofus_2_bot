import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeBonusChoiceSelectedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4926;

	public challengeBonus: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeBonusChoiceSelectedMessage.protocolId;
    }

    public initChallengeBonusChoiceSelectedMessage(challengeBonus: number = 0): ChallengeBonusChoiceSelectedMessage
    {
        this.challengeBonus = challengeBonus;
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
        this.serializeAs_ChallengeBonusChoiceSelectedMessage(output);
    }

    public serializeAs_ChallengeBonusChoiceSelectedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.challengeBonus);
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