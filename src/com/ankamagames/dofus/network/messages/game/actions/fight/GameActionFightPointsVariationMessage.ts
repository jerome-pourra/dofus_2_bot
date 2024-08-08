import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightPointsVariationMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8927;

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
        return GameActionFightPointsVariationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightPointsVariationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightPointsVariationMessage.endpointServer;
    }

    public initGameActionFightPointsVariationMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, delta: number = 0): GameActionFightPointsVariationMessage
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
        this.serializeAs_GameActionFightPointsVariationMessage(output);
    }

    public serializeAs_GameActionFightPointsVariationMessage(output: ICustomDataOutput)
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
        this.deserializeAs_GameActionFightPointsVariationMessage(input);
    }

    private deserializeAs_GameActionFightPointsVariationMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightPointsVariationMessage.targetId.");
        }
    }

    private _deltaFunc(input: ICustomDataInput)
    {
        this.delta = input.readShort();
    }

}