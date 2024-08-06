import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class KohScore implements INetworkType
{

	public static readonly protocolId: number = 5560;

	public avaScoreTypeEnum: number = 1;
	public roundScores: number = 0;
	public cumulScores: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return KohScore.protocolId;
    }

    public initKohScore(avaScoreTypeEnum: number = 1, roundScores: number = 0, cumulScores: number = 0): KohScore
    {
        this.avaScoreTypeEnum = avaScoreTypeEnum;
        this.roundScores = roundScores;
        this.cumulScores = cumulScores;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_KohScore(output);
    }

    public serializeAs_KohScore(output: ICustomDataOutput)
    {
        output.writeByte(this.avaScoreTypeEnum);
        output.writeInt(this.roundScores);
        output.writeInt(this.cumulScores);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KohScore(input);
    }

    private deserializeAs_KohScore(input: ICustomDataInput)
    {
        this._avaScoreTypeEnumFunc(input);
        this._roundScoresFunc(input);
        this._cumulScoresFunc(input);
    }

    private _avaScoreTypeEnumFunc(input: ICustomDataInput)
    {
        this.avaScoreTypeEnum = input.readByte();
        if(this.avaScoreTypeEnum < 0)
        {
            throw new Error("Forbidden value (" + this.avaScoreTypeEnum + ") on element of KohScore.avaScoreTypeEnum.");
        }
    }

    private _roundScoresFunc(input: ICustomDataInput)
    {
        this.roundScores = input.readInt();
    }

    private _cumulScoresFunc(input: ICustomDataInput)
    {
        this.cumulScores = input.readInt();
    }

}