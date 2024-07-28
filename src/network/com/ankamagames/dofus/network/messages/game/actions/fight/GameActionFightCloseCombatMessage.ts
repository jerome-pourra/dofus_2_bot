import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { AbstractGameActionFightTargetedAbilityMessage } from "./AbstractGameActionFightTargetedAbilityMessage";

export class GameActionFightCloseCombatMessage extends AbstractGameActionFightTargetedAbilityMessage
{

	public static readonly protocolId: number = 2405;

	public weaponGenericId: number = 0;

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