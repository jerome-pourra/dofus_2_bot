import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightExchangePositionsMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 8976;

	public targetId: number = 0;
	public casterCellId: number = 0;
	public targetCellId: number = 0;

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
        this.deserializeAs_GameActionFightExchangePositionsMessage(input);
    }

    private deserializeAs_GameActionFightExchangePositionsMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._casterCellIdFunc(input);
        this._targetCellIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightExchangePositionsMessage.targetId.");
        }
    }

    private _casterCellIdFunc(input: ICustomDataInput)
    {
        this.casterCellId = input.readShort();
        if(this.casterCellId < -1 || this.casterCellId > 559)
        {
            throw new Error("Forbidden value (" + this.casterCellId + ") on element of GameActionFightExchangePositionsMessage.casterCellId.");
        }
    }

    private _targetCellIdFunc(input: ICustomDataInput)
    {
        this.targetCellId = input.readShort();
        if(this.targetCellId < -1 || this.targetCellId > 559)
        {
            throw new Error("Forbidden value (" + this.targetCellId + ") on element of GameActionFightExchangePositionsMessage.targetCellId.");
        }
    }

}