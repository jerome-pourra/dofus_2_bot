import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameActionFightCastOnTargetRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6910;

	public spellId: number = 0;
	public targetId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightCastOnTargetRequestMessage.protocolId;
    }

    public initGameActionFightCastOnTargetRequestMessage(spellId: number = 0, targetId: number = 0): GameActionFightCastOnTargetRequestMessage
    {
        this.spellId = spellId;
        this.targetId = targetId;
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
        this.serializeAs_GameActionFightCastOnTargetRequestMessage(output);
    }

    public serializeAs_GameActionFightCastOnTargetRequestMessage(output: ICustomDataOutput)
    {
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightCastOnTargetRequestMessage(input);
    }

    private deserializeAs_GameActionFightCastOnTargetRequestMessage(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
        this._targetIdFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightCastOnTargetRequestMessage.spellId.");
        }
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightCastOnTargetRequestMessage.targetId.");
        }
    }

}