import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class SpellVariantActivationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1715;

	public spellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SpellVariantActivationRequestMessage.protocolId;
    }

    public initSpellVariantActivationRequestMessage(spellId: number = 0): SpellVariantActivationRequestMessage
    {
        this.spellId = spellId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpellVariantActivationRequestMessage(output);
    }

    public serializeAs_SpellVariantActivationRequestMessage(output: ICustomDataOutput)
    {
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpellVariantActivationRequestMessage(input);
    }

    private deserializeAs_SpellVariantActivationRequestMessage(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of SpellVariantActivationRequestMessage.spellId.");
        }
    }

}