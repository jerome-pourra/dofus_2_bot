import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightSpellImmunityMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 276;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;
	public spellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightSpellImmunityMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightSpellImmunityMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightSpellImmunityMessage.endpointServer;
    }

    public initGameActionFightSpellImmunityMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, spellId: number = 0): GameActionFightSpellImmunityMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.spellId = spellId;
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
        this.serializeAs_GameActionFightSpellImmunityMessage(output);
    }

    public serializeAs_GameActionFightSpellImmunityMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightSpellImmunityMessage(input);
    }

    private deserializeAs_GameActionFightSpellImmunityMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._spellIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightSpellImmunityMessage.targetId.");
        }
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightSpellImmunityMessage.spellId.");
        }
    }

}