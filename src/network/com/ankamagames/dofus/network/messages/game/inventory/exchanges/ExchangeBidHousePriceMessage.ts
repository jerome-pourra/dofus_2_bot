import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHousePriceMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1454;

	public objectGID: number = 0;

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
        this.deserializeAs_ExchangeBidHousePriceMessage(input);
    }

    private deserializeAs_ExchangeBidHousePriceMessage(input: ICustomDataInput)
    {
        this._objectGIDFunc(input);
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ExchangeBidHousePriceMessage.objectGID.");
        }
    }

}