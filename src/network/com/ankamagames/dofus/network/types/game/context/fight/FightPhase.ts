import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightPhase
{

	public static readonly protocolId: number = 2770;

	public phase: number = 0;
	public phaseEndTimeStamp: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightPhase(input);
    }

    private deserializeAs_FightPhase(input: ICustomDataInput)
    {
        this._phaseFunc(input);
        this._phaseEndTimeStampFunc(input);
    }

    private _phaseFunc(input: ICustomDataInput)
    {
        this.phase = input.readByte();
        if(this.phase < 0)
        {
            throw new Error("Forbidden value (" + this.phase + ") on element of FightPhase.phase.");
        }
    }

    private _phaseEndTimeStampFunc(input: ICustomDataInput)
    {
        this.phaseEndTimeStamp = input.readDouble();
        if(this.phaseEndTimeStamp < -9007199254740992 || this.phaseEndTimeStamp > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.phaseEndTimeStamp + ") on element of FightPhase.phaseEndTimeStamp.");
        }
    }

}