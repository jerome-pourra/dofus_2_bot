import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameActionFightDispellEffectMessage } from "./GameActionFightDispellEffectMessage";

export class GameActionFightTriggerEffectMessage extends GameActionFightDispellEffectMessage
{

	public static readonly protocolId: number = 8838;

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
        this.deserializeAs_GameActionFightTriggerEffectMessage(input);
    }

    private deserializeAs_GameActionFightTriggerEffectMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}