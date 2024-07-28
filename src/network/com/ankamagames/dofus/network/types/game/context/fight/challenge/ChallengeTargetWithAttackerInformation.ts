import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ChallengeTargetInformation } from "./ChallengeTargetInformation";

export class ChallengeTargetWithAttackerInformation extends ChallengeTargetInformation
{

	public static readonly protocolId: number = 540;

	public attackersIds: Array<number>;

    public constructor()
    {
        super();
        this.attackersIds = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeTargetWithAttackerInformation(input);
    }

    private deserializeAs_ChallengeTargetWithAttackerInformation(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        super.deserialize(input);
        let _attackersIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _attackersIdsLen; _i1++)
        {
            _val1 = Number(input.readDouble());
            if(_val1 < -9007199254740992 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of attackersIds.");
            }
            this.attackersIds.push(_val1);
        }
    }

}