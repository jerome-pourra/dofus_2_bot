import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ForgettableSpellDeleteMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4353;

	public reason: number = 0;
	public spells: Array<number>;

    public constructor()
    {
        super();
        this.spells = Array<number>();
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
        this.deserializeAs_ForgettableSpellDeleteMessage(input);
    }

    private deserializeAs_ForgettableSpellDeleteMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._reasonFunc(input);
        let _spellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _spellsLen; _i2++)
        {
            _val2 = input.readInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of spells.");
            }
            this.spells.push(_val2);
        }
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of ForgettableSpellDeleteMessage.reason.");
        }
    }

}