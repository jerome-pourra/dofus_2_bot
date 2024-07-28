import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NuggetsInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5214;

	public nuggetsQuantity: number = 0;

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
        this.deserializeAs_NuggetsInformationMessage(input);
    }

    private deserializeAs_NuggetsInformationMessage(input: ICustomDataInput)
    {
        this._nuggetsQuantityFunc(input);
    }

    private _nuggetsQuantityFunc(input: ICustomDataInput)
    {
        this.nuggetsQuantity = input.readInt();
    }

}