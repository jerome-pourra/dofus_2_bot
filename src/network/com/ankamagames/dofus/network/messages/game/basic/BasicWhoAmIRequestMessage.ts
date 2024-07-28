import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicWhoAmIRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 390;

	public verbose: boolean = false;

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
        this.deserializeAs_BasicWhoAmIRequestMessage(input);
    }

    private deserializeAs_BasicWhoAmIRequestMessage(input: ICustomDataInput)
    {
        this._verboseFunc(input);
    }

    private _verboseFunc(input: ICustomDataInput)
    {
        this.verbose = input.readBoolean();
    }

}