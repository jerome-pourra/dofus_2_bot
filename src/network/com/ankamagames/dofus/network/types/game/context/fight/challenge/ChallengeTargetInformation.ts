import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class ChallengeTargetInformation implements INetworkType
{

	public static readonly protocolId: number = 4052;

	public targetId: number = 0;
	public targetCell: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ChallengeTargetInformation.protocolId;
    }

    public initChallengeTargetInformation(targetId: number = 0, targetCell: number = 0): ChallengeTargetInformation
    {
        this.targetId = targetId;
        this.targetCell = targetCell;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ChallengeTargetInformation(output);
    }

    public serializeAs_ChallengeTargetInformation(output: ICustomDataOutput)
    {
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        if(this.targetCell < -1 || this.targetCell > 559)
        {
            throw new Error("Forbidden value (" + this.targetCell + ") on element targetCell.");
        }
        output.writeShort(this.targetCell);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeTargetInformation(input);
    }

    private deserializeAs_ChallengeTargetInformation(input: ICustomDataInput)
    {
        this._targetIdFunc(input);
        this._targetCellFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of ChallengeTargetInformation.targetId.");
        }
    }

    private _targetCellFunc(input: ICustomDataInput)
    {
        this.targetCell = input.readShort();
        if(this.targetCell < -1 || this.targetCell > 559)
        {
            throw new Error("Forbidden value (" + this.targetCell + ") on element of ChallengeTargetInformation.targetCell.");
        }
    }

}