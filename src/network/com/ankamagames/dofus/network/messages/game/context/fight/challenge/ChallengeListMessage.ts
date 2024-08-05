import { ChallengeInformation } from "./../../../../../types/game/context/fight/challenge/ChallengeInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4436;

	public challengesInformation: Array<ChallengeInformation>;

    public constructor()
    {
        super();
        this.challengesInformation = Array<ChallengeInformation>();
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