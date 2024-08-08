import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeBonusChoiceMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2271;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public challengeBonus: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeBonusChoiceMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeBonusChoiceMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeBonusChoiceMessage.endpointServer;
    }

    public initChallengeBonusChoiceMessage(challengeBonus: number = 0): ChallengeBonusChoiceMessage
    {
        this.challengeBonus = challengeBonus;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ChallengeBonusChoiceMessage(output);
    }

    public serializeAs_ChallengeBonusChoiceMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.challengeBonus);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeBonusChoiceMessage(input);
    }

    private deserializeAs_ChallengeBonusChoiceMessage(input: ICustomDataInput)
    {
        this._challengeBonusFunc(input);
    }

    private _challengeBonusFunc(input: ICustomDataInput)
    {
        this.challengeBonus = input.readByte();
        if(this.challengeBonus < 0)
        {
            throw new Error("Forbidden value (" + this.challengeBonus + ") on element of ChallengeBonusChoiceMessage.challengeBonus.");
        }
    }

}