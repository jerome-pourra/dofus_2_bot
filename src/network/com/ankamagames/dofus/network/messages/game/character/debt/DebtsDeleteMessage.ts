import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DebtsDeleteMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7828;

	public reason: number = 0;
	public debts: Array<number>;

    public constructor()
    {
        super();
        this.debts = Array<number>();
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
        this.deserializeAs_DebtsDeleteMessage(input);
    }

    private deserializeAs_DebtsDeleteMessage(input: ICustomDataInput)
    {
        let _val2: number = NaN;
        this._reasonFunc(input);
        let _debtsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _debtsLen; _i2++)
        {
            _val2 = Number(input.readDouble());
            if(_val2 < 0 || _val2 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of debts.");
            }
            this.debts.push(_val2);
        }
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of DebtsDeleteMessage.reason.");
        }
    }

}