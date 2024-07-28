import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseTypeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8802;

	public type: number = 0;
	public follow: boolean = false;

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
        this.deserializeAs_ExchangeBidHouseTypeMessage(input);
    }

    private deserializeAs_ExchangeBidHouseTypeMessage(input: ICustomDataInput)
    {
        this._typeFunc(input);
        this._followFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readVarUhInt();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of ExchangeBidHouseTypeMessage.type.");
        }
    }

    private _followFunc(input: ICustomDataInput)
    {
        this.follow = input.readBoolean();
    }

}