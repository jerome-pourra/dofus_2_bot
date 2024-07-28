import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicPingMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7461;

	public quiet: boolean = false;

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
        this.deserializeAs_BasicPingMessage(input);
    }

    private deserializeAs_BasicPingMessage(input: ICustomDataInput)
    {
        this._quietFunc(input);
    }

    private _quietFunc(input: ICustomDataInput)
    {
        this.quiet = input.readBoolean();
    }

}