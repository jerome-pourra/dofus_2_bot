import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachCharactersMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6556;

	public characters: Array<number>;

    public constructor()
    {
        super();
        this.characters = Array<number>();
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
        this.deserializeAs_BreachCharactersMessage(input);
    }

    private deserializeAs_BreachCharactersMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        let _charactersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _charactersLen; _i1++)
        {
            _val1 = input.readVarUhLong();
            if(_val1 < 0 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of characters.");
            }
            this.characters.push(_val1);
        }
    }

}