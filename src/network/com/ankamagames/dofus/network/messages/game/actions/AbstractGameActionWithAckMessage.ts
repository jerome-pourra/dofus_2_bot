import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { AbstractGameActionMessage } from "./AbstractGameActionMessage";

export class AbstractGameActionWithAckMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 1587;

	public waitAckId: number = 0;

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
        this.deserializeAs_AbstractGameActionWithAckMessage(input);
    }

    private deserializeAs_AbstractGameActionWithAckMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._waitAckIdFunc(input);
    }

    private _waitAckIdFunc(input: ICustomDataInput)
    {
        this.waitAckId = input.readShort();
    }

}