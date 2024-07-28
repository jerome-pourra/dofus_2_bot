import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3411;

	public remote: boolean = false;

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
        this.deserializeAs_ExchangeObjectMessage(input);
    }

    private deserializeAs_ExchangeObjectMessage(input: ICustomDataInput)
    {
        this._remoteFunc(input);
    }

    private _remoteFunc(input: ICustomDataInput)
    {
        this.remote = input.readBoolean();
    }

}