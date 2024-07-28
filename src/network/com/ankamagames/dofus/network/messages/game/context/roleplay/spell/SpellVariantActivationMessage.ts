import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class SpellVariantActivationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7767;

	public spellId: number = 0;
	public result: boolean = false;

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
        this.deserializeAs_SpellVariantActivationMessage(input);
    }

    private deserializeAs_SpellVariantActivationMessage(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
        this._resultFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of SpellVariantActivationMessage.spellId.");
        }
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readBoolean();
    }

}