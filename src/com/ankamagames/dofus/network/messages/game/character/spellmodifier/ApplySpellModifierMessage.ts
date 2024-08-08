import { SpellModifierMessage } from "./../../../../types/game/character/spellmodifier/SpellModifierMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ApplySpellModifierMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1373;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public actorId: number = 0;
	public modifier: SpellModifierMessage;

    public constructor()
    {
        super();
        this.modifier = new SpellModifierMessage();
    }

    public getMessageId()
    {
        return ApplySpellModifierMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ApplySpellModifierMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ApplySpellModifierMessage.endpointServer;
    }

    public initApplySpellModifierMessage(actorId: number = 0, modifier: SpellModifierMessage = null): ApplySpellModifierMessage
    {
        this.actorId = actorId;
        this.modifier = modifier;
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
        this.serializeAs_ApplySpellModifierMessage(output);
    }

    public serializeAs_ApplySpellModifierMessage(output: ICustomDataOutput)
    {
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element actorId.");
        }
        output.writeDouble(this.actorId);
        this.modifier.serializeAs_SpellModifierMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ApplySpellModifierMessage(input);
    }

    private deserializeAs_ApplySpellModifierMessage(input: ICustomDataInput)
    {
        this._actorIdFunc(input);
        this.modifier = new SpellModifierMessage();
        this.modifier.deserialize(input);
    }

    private _actorIdFunc(input: ICustomDataInput)
    {
        this.actorId = input.readDouble();
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element of ApplySpellModifierMessage.actorId.");
        }
    }

}