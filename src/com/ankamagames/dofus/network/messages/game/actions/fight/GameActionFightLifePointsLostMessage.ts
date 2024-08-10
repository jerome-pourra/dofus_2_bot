import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightLifePointsLostMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6444;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;
	public loss: number = 0;
	public permanentDamages: number = 0;
	public elementId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightLifePointsLostMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightLifePointsLostMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightLifePointsLostMessage.endpointServer;
    }

    public initGameActionFightLifePointsLostMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, loss: number = 0, permanentDamages: number = 0, elementId: number = 0): GameActionFightLifePointsLostMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.loss = loss;
        this.permanentDamages = permanentDamages;
        this.elementId = elementId;
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
        this.serializeAs_GameActionFightLifePointsLostMessage(output);
    }

    public serializeAs_GameActionFightLifePointsLostMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        if(this.loss < 0)
        {
            throw new Error("Forbidden value (" + this.loss + ") on element loss.");
        }
        output.writeVarInt(this.loss);
        if(this.permanentDamages < 0)
        {
            throw new Error("Forbidden value (" + this.permanentDamages + ") on element permanentDamages.");
        }
        output.writeVarInt(this.permanentDamages);
        output.writeVarInt(this.elementId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightLifePointsLostMessage(input);
    }

    private deserializeAs_GameActionFightLifePointsLostMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._lossFunc(input);
        this._permanentDamagesFunc(input);
        this._elementIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightLifePointsLostMessage.targetId.");
        }
    }

    private _lossFunc(input: ICustomDataInput)
    {
        this.loss = input.readVarUhInt();
        if(this.loss < 0)
        {
            throw new Error("Forbidden value (" + this.loss + ") on element of GameActionFightLifePointsLostMessage.loss.");
        }
    }

    private _permanentDamagesFunc(input: ICustomDataInput)
    {
        this.permanentDamages = input.readVarUhInt();
        if(this.permanentDamages < 0)
        {
            throw new Error("Forbidden value (" + this.permanentDamages + ") on element of GameActionFightLifePointsLostMessage.permanentDamages.");
        }
    }

    private _elementIdFunc(input: ICustomDataInput)
    {
        this.elementId = input.readVarInt();
    }

}