import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeHandleMountsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3319;

	public actionType: number = 0;
	public ridesId: Array<number>;

    public constructor()
    {
        super();
        this.ridesId = Array<number>();
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
        this.deserializeAs_ExchangeHandleMountsMessage(input);
    }

    private deserializeAs_ExchangeHandleMountsMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._actionTypeFunc(input);
        let _ridesIdLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _ridesIdLen; _i2++)
        {
            _val2 = input.readVarUhInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of ridesId.");
            }
            this.ridesId.push(_val2);
        }
    }

    private _actionTypeFunc(input: ICustomDataInput)
    {
        this.actionType = input.readByte();
    }

}