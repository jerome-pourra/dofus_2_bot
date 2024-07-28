import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightModifyEffectsDurationMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 9731;

	public targetId: number = 0;
	public delta: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_GameActionFightModifyEffectsDurationMessage(input);
    }

    private deserializeAs_GameActionFightModifyEffectsDurationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._deltaFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightModifyEffectsDurationMessage.targetId.");
        }
    }

    private _deltaFunc(input: ICustomDataInput)
    {
        this.delta = input.readShort();
    }

}