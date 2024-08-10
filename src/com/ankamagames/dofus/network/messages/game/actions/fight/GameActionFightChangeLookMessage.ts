import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { EntityLook } from "./../../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightChangeLookMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1629;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;
	public entityLook: EntityLook;

    public constructor()
    {
        super();
        this.entityLook = new EntityLook();
    }

    public getMessageId()
    {
        return GameActionFightChangeLookMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightChangeLookMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightChangeLookMessage.endpointServer;
    }

    public initGameActionFightChangeLookMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, entityLook: EntityLook = null): GameActionFightChangeLookMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.entityLook = entityLook;
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
        this.serializeAs_GameActionFightChangeLookMessage(output);
    }

    public serializeAs_GameActionFightChangeLookMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        this.entityLook.serializeAs_EntityLook(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightChangeLookMessage(input);
    }

    private deserializeAs_GameActionFightChangeLookMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightChangeLookMessage.targetId.");
        }
    }

}