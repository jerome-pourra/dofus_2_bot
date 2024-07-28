import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightSlideMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 7006;

	public targetId: number = 0;
	public startCellId: number = 0;
	public endCellId: number = 0;

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
        this.deserializeAs_GameActionFightSlideMessage(input);
    }

    private deserializeAs_GameActionFightSlideMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._startCellIdFunc(input);
        this._endCellIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightSlideMessage.targetId.");
        }
    }

    private _startCellIdFunc(input: ICustomDataInput)
    {
        this.startCellId = input.readShort();
        if(this.startCellId < -1 || this.startCellId > 559)
        {
            throw new Error("Forbidden value (" + this.startCellId + ") on element of GameActionFightSlideMessage.startCellId.");
        }
    }

    private _endCellIdFunc(input: ICustomDataInput)
    {
        this.endCellId = input.readShort();
        if(this.endCellId < -1 || this.endCellId > 559)
        {
            throw new Error("Forbidden value (" + this.endCellId + ") on element of GameActionFightSlideMessage.endCellId.");
        }
    }

}