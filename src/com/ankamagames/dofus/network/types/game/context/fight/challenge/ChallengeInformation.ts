import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ChallengeTargetInformation } from "./ChallengeTargetInformation";

export class ChallengeInformation implements INetworkType
{

	public static readonly protocolId: number = 1494;

	public challengeId: number = 0;
	public targetsList: Array<ChallengeTargetInformation>;
	public dropBonus: number = 0;
	public xpBonus: number = 0;
	public state: number = 2;

    public constructor()
    {
        this.targetsList = Array<ChallengeTargetInformation>();
    }

    public getTypeId()
    {
        return ChallengeInformation.protocolId;
    }

    public initChallengeInformation(challengeId: number = 0, targetsList: Array<ChallengeTargetInformation> = null, dropBonus: number = 0, xpBonus: number = 0, state: number = 2): ChallengeInformation
    {
        this.challengeId = challengeId;
        this.targetsList = targetsList;
        this.dropBonus = dropBonus;
        this.xpBonus = xpBonus;
        this.state = state;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ChallengeInformation(output);
    }

    public serializeAs_ChallengeInformation(output: ICustomDataOutput)
    {
        if(this.challengeId < 0)
        {
            throw new Error("Forbidden value (" + this.challengeId + ") on element challengeId.");
        }
        output.writeVarInt(this.challengeId);
        output.writeShort(this.targetsList.length);
        for(var _i2: number = 0; _i2 < this.targetsList.length; _i2++)
        {
            output.writeShort((this.targetsList[_i2] as ChallengeTargetInformation).getTypeId());
            (this.targetsList[_i2] as ChallengeTargetInformation).serialize(output);
        }
        if(this.dropBonus < 0)
        {
            throw new Error("Forbidden value (" + this.dropBonus + ") on element dropBonus.");
        }
        output.writeVarInt(this.dropBonus);
        if(this.xpBonus < 0)
        {
            throw new Error("Forbidden value (" + this.xpBonus + ") on element xpBonus.");
        }
        output.writeVarInt(this.xpBonus);
        output.writeByte(this.state);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeInformation(input);
    }

    private deserializeAs_ChallengeInformation(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: ChallengeTargetInformation;
        this._challengeIdFunc(input);
        let _targetsListLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _targetsListLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(ChallengeTargetInformation,_id2);
            _item2.deserialize(input);
            this.targetsList.push(_item2);
        }
        this._dropBonusFunc(input);
        this._xpBonusFunc(input);
        this._stateFunc(input);
    }

    private _challengeIdFunc(input: ICustomDataInput)
    {
        this.challengeId = input.readVarUhInt();
        if(this.challengeId < 0)
        {
            throw new Error("Forbidden value (" + this.challengeId + ") on element of ChallengeInformation.challengeId.");
        }
    }

    private _dropBonusFunc(input: ICustomDataInput)
    {
        this.dropBonus = input.readVarUhInt();
        if(this.dropBonus < 0)
        {
            throw new Error("Forbidden value (" + this.dropBonus + ") on element of ChallengeInformation.dropBonus.");
        }
    }

    private _xpBonusFunc(input: ICustomDataInput)
    {
        this.xpBonus = input.readVarUhInt();
        if(this.xpBonus < 0)
        {
            throw new Error("Forbidden value (" + this.xpBonus + ") on element of ChallengeInformation.xpBonus.");
        }
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of ChallengeInformation.state.");
        }
    }

}