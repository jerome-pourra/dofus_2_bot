import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachExitResponseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6746;

	public exited: boolean = false;

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
        this.deserializeAs_BreachExitResponseMessage(input);
    }

    private deserializeAs_BreachExitResponseMessage(input: ICustomDataInput)
    {
        this._exitedFunc(input);
    }

    private _exitedFunc(input: ICustomDataInput)
    {
        this.exited = input.readBoolean();
    }

}