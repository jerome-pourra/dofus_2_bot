import { ChallengeInformation } from "./../../../../../types/game/context/fight/challenge/ChallengeInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4436;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public challengesInformation: Array<ChallengeInformation>;

    public constructor()
    {
        super();
        this.challengesInformation = Array<ChallengeInformation>();
    }

    public getMessageId()
    {
        return ChallengeListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeListMessage.endpointServer;
    }

    public initChallengeListMessage(challengesInformation: Array<ChallengeInformation> = null): ChallengeListMessage
    {
        this.challengesInformation = challengesInformation;
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
        this.serializeAs_ChallengeListMessage(output);
    }

    public serializeAs_ChallengeListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.challengesInformation.length);
        for(var _i1: number = 0; _i1 < this.challengesInformation.length; _i1++)
        {
            (this.challengesInformation[_i1] as ChallengeInformation).serializeAs_ChallengeInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeListMessage(input);
    }

    private deserializeAs_ChallengeListMessage(input: ICustomDataInput)
    {
        let _item1: ChallengeInformation;
        let _challengesInformationLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _challengesInformationLen; _i1++)
        {
            _item1 = new ChallengeInformation();
            _item1.deserialize(input);
            this.challengesInformation.push(_item1);
        }
    }

}