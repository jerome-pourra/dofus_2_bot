import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class TrustStatusMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3339;

	public certified: boolean = false;

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
        this.deserializeAs_TrustStatusMessage(input);
    }

    private deserializeAs_TrustStatusMessage(input: ICustomDataInput)
    {
        this._certifiedFunc(input);
    }

    private _certifiedFunc(input: ICustomDataInput)
    {
        this.certified = input.readBoolean();
    }

}