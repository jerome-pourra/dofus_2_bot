import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionEmote extends HumanOption
{

	public static readonly protocolId: number = 7646;

	public emoteId: number = 0;
	public emoteStartTime: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionEmote(input);
    }

    private deserializeAs_HumanOptionEmote(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._emoteIdFunc(input);
        this._emoteStartTimeFunc(input);
    }

    private _emoteIdFunc(input: ICustomDataInput)
    {
        this.emoteId = input.readUnsignedShort();
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element of HumanOptionEmote.emoteId.");
        }
    }

    private _emoteStartTimeFunc(input: ICustomDataInput)
    {
        this.emoteStartTime = input.readDouble();
        if(this.emoteStartTime < -9007199254740992 || this.emoteStartTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.emoteStartTime + ") on element of HumanOptionEmote.emoteStartTime.");
        }
    }

}