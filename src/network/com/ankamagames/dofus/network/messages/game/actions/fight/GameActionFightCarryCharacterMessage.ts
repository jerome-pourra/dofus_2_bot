import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightCarryCharacterMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 5771;

	public targetId: number = 0;
	public cellId: number = 0;

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
        this.deserializeAs_GameActionFightCarryCharacterMessage(input);
    }

    private deserializeAs_GameActionFightCarryCharacterMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._cellIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightCarryCharacterMessage.targetId.");
        }
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readShort();
        if(this.cellId < -1 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightCarryCharacterMessage.cellId.");
        }
    }

}