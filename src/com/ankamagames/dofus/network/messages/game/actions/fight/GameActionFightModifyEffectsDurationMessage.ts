import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightModifyEffectsDurationMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9731;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;
	public delta: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightModifyEffectsDurationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightModifyEffectsDurationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightModifyEffectsDurationMessage.endpointServer;
    }

    public initGameActionFightModifyEffectsDurationMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, delta: number = 0): GameActionFightModifyEffectsDurationMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.delta = delta;
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
        this.serializeAs_GameActionFightModifyEffectsDurationMessage(output);
    }

    public serializeAs_GameActionFightModifyEffectsDurationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        output.writeShort(this.delta);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightModifyEffectsDurationMessage(input);
    }

    private deserializeAs_GameActionFightModifyEffectsDurationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._deltaFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightModifyEffectsDurationMessage.targetId.");
        }
    }

    private _deltaFunc(input: ICustomDataInput)
    {
        this.delta = input.readShort();
    }

}