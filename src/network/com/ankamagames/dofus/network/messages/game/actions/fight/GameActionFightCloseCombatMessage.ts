import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { AbstractGameActionFightTargetedAbilityMessage } from "./AbstractGameActionFightTargetedAbilityMessage";

export class GameActionFightCloseCombatMessage extends AbstractGameActionFightTargetedAbilityMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2405;

	public weaponGenericId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightCloseCombatMessage.protocolId;
    }

    public initGameActionFightCloseCombatMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, destinationCellId: number = 0, critical: number = 1, silentCast: boolean = false, verboseCast: boolean = false, weaponGenericId: number = 0): GameActionFightCloseCombatMessage
    {
        super.initAbstractGameActionFightTargetedAbilityMessage(actionId,sourceId,targetId,destinationCellId,critical,silentCast,verboseCast);
        this.weaponGenericId = weaponGenericId;
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
        this.serializeAs_GameActionFightCloseCombatMessage(output);
    }

    public serializeAs_GameActionFightCloseCombatMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionFightTargetedAbilityMessage(output);
        if(this.weaponGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.weaponGenericId + ") on element weaponGenericId.");
        }
        output.writeVarInt(this.weaponGenericId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightCloseCombatMessage(input);
    }

    private deserializeAs_GameActionFightCloseCombatMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._weaponGenericIdFunc(input);
    }

    private _weaponGenericIdFunc(input: ICustomDataInput)
    {
        this.weaponGenericId = input.readVarUhInt();
        if(this.weaponGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.weaponGenericId + ") on element of GameActionFightCloseCombatMessage.weaponGenericId.");
        }
    }

}