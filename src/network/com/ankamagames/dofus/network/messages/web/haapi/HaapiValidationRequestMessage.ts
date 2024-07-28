import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiValidationRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2930;

	public transaction: string = "";

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
        this.deserializeAs_HaapiValidationRequestMessage(input);
    }

    private deserializeAs_HaapiValidationRequestMessage(input: ICustomDataInput)
    {
        this._transactionFunc(input);
    }

    private _transactionFunc(input: ICustomDataInput)
    {
        this.transaction = input.readUTF();
    }

}