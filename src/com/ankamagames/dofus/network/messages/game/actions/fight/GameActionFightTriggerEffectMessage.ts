import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameActionFightDispellEffectMessage } from "./GameActionFightDispellEffectMessage";

export class GameActionFightTriggerEffectMessage extends GameActionFightDispellEffectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8838;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightTriggerEffectMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightTriggerEffectMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightTriggerEffectMessage.endpointServer;
    }

    public initGameActionFightTriggerEffectMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, verboseCast: boolean = false, boostUID: number = 0): GameActionFightTriggerEffectMessage
    {
        super.initGameActionFightDispellEffectMessage(actionId,sourceId,targetId,verboseCast,boostUID);
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
        this.serializeAs_GameActionFightTriggerEffectMessage(output);
    }

    public serializeAs_GameActionFightTriggerEffectMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameActionFightDispellEffectMessage(output);
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