import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightKillMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6293;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightKillMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightKillMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightKillMessage.endpointServer;
    }

    public initGameActionFightKillMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0): GameActionFightKillMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
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
        this.serializeAs_GameActionFightKillMessage(output);
    }

    public serializeAs_GameActionFightKillMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightKillMessage(input);
    }

    private deserializeAs_GameActionFightKillMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightKillMessage.targetId.");
        }
    }

}