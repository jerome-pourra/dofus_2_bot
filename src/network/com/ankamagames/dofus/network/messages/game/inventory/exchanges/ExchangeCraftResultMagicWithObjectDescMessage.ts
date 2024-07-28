import { ObjectItemNotInContainer } from "./../../../../types/game/data/items/ObjectItemNotInContainer";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeCraftResultWithObjectDescMessage } from "./ExchangeCraftResultWithObjectDescMessage";

export class ExchangeCraftResultMagicWithObjectDescMessage extends ExchangeCraftResultWithObjectDescMessage
{

	public static readonly protocolId: number = 95;

	public magicPoolStatus: number = 0;

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
        this.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(input);
    }

    private deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._magicPoolStatusFunc(input);
    }

    private _magicPoolStatusFunc(input: ICustomDataInput)
    {
        this.magicPoolStatus = input.readByte();
    }

}