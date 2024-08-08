import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightSlideMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7006;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;
	public startCellId: number = 0;
	public endCellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightSlideMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightSlideMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightSlideMessage.endpointServer;
    }

    public initGameActionFightSlideMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, startCellId: number = 0, endCellId: number = 0): GameActionFightSlideMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.startCellId = startCellId;
        this.endCellId = endCellId;
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
        this.serializeAs_GameActionFightSlideMessage(output);
    }

    public serializeAs_GameActionFightSlideMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        if(this.startCellId < -1 || this.startCellId > 559)
        {
            throw new Error("Forbidden value (" + this.startCellId + ") on element startCellId.");
        }
        output.writeShort(this.startCellId);
        if(this.endCellId < -1 || this.endCellId > 559)
        {
            throw new Error("Forbidden value (" + this.endCellId + ") on element endCellId.");
        }
        output.writeShort(this.endCellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightSlideMessage(input);
    }

    private deserializeAs_GameActionFightSlideMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._startCellIdFunc(input);
        this._endCellIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightSlideMessage.targetId.");
        }
    }

    private _startCellIdFunc(input: ICustomDataInput)
    {
        this.startCellId = input.readShort();
        if(this.startCellId < -1 || this.startCellId > 559)
        {
            throw new Error("Forbidden value (" + this.startCellId + ") on element of GameActionFightSlideMessage.startCellId.");
        }
    }

    private _endCellIdFunc(input: ICustomDataInput)
    {
        this.endCellId = input.readShort();
        if(this.endCellId < -1 || this.endCellId > 559)
        {
            throw new Error("Forbidden value (" + this.endCellId + ") on element of GameActionFightSlideMessage.endCellId.");
        }
    }

}