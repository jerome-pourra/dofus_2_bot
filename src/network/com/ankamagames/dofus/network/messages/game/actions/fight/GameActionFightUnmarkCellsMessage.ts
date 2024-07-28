import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightUnmarkCellsMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 9827;

	public markId: number = 0;

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
        this.deserializeAs_GameActionFightUnmarkCellsMessage(input);
    }

    private deserializeAs_GameActionFightUnmarkCellsMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._markIdFunc(input);
    }

    private _markIdFunc(input: ICustomDataInput)
    {
        this.markId = input.readShort();
    }

}