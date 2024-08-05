import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeObjectMoveKamaMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7773;

	public quantity: number = 0;

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
        this.deserializeAs_ExchangeObjectMoveKamaMessage(input);
    }

    private deserializeAs_ExchangeObjectMoveKamaMessage(input: ICustomDataInput)
    {
        this._quantityFunc(input);
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarLong();
        if(this.quantity < -9007199254740992 || this.quantity > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeObjectMoveKamaMessage.quantity.");
        }
    }

}