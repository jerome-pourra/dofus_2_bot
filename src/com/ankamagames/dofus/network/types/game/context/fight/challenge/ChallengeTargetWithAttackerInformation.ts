import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ChallengeTargetInformation } from "./ChallengeTargetInformation";

export class ChallengeTargetWithAttackerInformation extends ChallengeTargetInformation implements INetworkType
{

	public static readonly protocolId: number = 540;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public attackersIds: Array<number>;

    public constructor()
    {
        super();
        this.attackersIds = Array<number>();
    }

    public getTypeId()
    {
        return ChallengeTargetWithAttackerInformation.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeTargetWithAttackerInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeTargetWithAttackerInformation.endpointServer;
    }

    public initChallengeTargetWithAttackerInformation(targetId: number = 0, targetCell: number = 0, attackersIds: Array<number> = null): ChallengeTargetWithAttackerInformation
    {
        super.initChallengeTargetInformation(targetId,targetCell);
        this.attackersIds = attackersIds;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ChallengeTargetWithAttackerInformation(output);
    }

    public serializeAs_ChallengeTargetWithAttackerInformation(output: ICustomDataOutput)
    {
        super.serializeAs_ChallengeTargetInformation(output);
        output.writeShort(this.attackersIds.length);
        for(var _i1: number = 0; _i1 < this.attackersIds.length; _i1++)
        {
            if(this.attackersIds[_i1] < -9007199254740992 || this.attackersIds[_i1] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.attackersIds[_i1] + ") on element 1 (starting at 1) of attackersIds.");
            }
            output.writeDouble(this.attackersIds[_i1]);
        }
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