import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class SpellVariantActivationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7767;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public spellId: number = 0;
	public result: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SpellVariantActivationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SpellVariantActivationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SpellVariantActivationMessage.endpointServer;
    }

    public initSpellVariantActivationMessage(spellId: number = 0, result: boolean = false): SpellVariantActivationMessage
    {
        this.spellId = spellId;
        this.result = result;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpellVariantActivationMessage(output);
    }

    public serializeAs_SpellVariantActivationMessage(output: ICustomDataOutput)
    {
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
        output.writeBoolean(this.result);
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