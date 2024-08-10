import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightLifePointsGainMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6590;

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
        return GameActionFightLifePointsGainMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightLifePointsGainMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightLifePointsGainMessage.endpointServer;
    }

    public initGameActionFightLifePointsGainMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, delta: number = 0): GameActionFightLifePointsGainMessage
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
        this.serializeAs_GameActionFightLifePointsGainMessage(output);
    }

    public serializeAs_GameActionFightLifePointsGainMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        if(this.delta < 0)
        {
            throw new Error("Forbidden value (" + this.delta + ") on element delta.");
        }
        output.writeVarInt(this.delta);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightLifePointsGainMessage(input);
    }

    private deserializeAs_GameActionFightLifePointsGainMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightLifePointsGainMessage.targetId.");
        }
    }

    private _deltaFunc(input: ICustomDataInput)
    {
        this.delta = input.readVarUhInt();
        if(this.delta < 0)
        {
            throw new Error("Forbidden value (" + this.delta + ") on element of GameActionFightLifePointsGainMessage.delta.");
        }
    }

}