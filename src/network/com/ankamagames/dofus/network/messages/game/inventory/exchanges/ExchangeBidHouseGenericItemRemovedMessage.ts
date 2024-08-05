import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseGenericItemRemovedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3347;

	public objGenericId: number = 0;

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
        this.deserializeAs_ExchangeBidHouseGenericItemRemovedMessage(input);
    }

    private deserializeAs_ExchangeBidHouseGenericItemRemovedMessage(input: ICustomDataInput)
    {
        this._objGenericIdFunc(input);
    }

    private _objGenericIdFunc(input: ICustomDataInput)
    {
        this.objGenericId = input.readVarUhInt();
        if(this.objGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.objGenericId + ") on element of ExchangeBidHouseGenericItemRemovedMessage.objGenericId.");
        }
    }

}