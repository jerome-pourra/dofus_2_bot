import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class LockableStateUpdateAbstractMessage extends NetworkMessage
{

	public static readonly protocolId: number = 107;

	public locked: boolean = false;

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
        this.deserializeAs_LockableStateUpdateAbstractMessage(input);
    }

    private deserializeAs_LockableStateUpdateAbstractMessage(input: ICustomDataInput)
    {
        this._lockedFunc(input);
    }

    private _lockedFunc(input: ICustomDataInput)
    {
        this.locked = input.readBoolean();
    }

}