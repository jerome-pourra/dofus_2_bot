import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightInvisibleDetectedMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7285;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;
	public cellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightInvisibleDetectedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightInvisibleDetectedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightInvisibleDetectedMessage.endpointServer;
    }

    public initGameActionFightInvisibleDetectedMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, cellId: number = 0): GameActionFightInvisibleDetectedMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.cellId = cellId;
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
        this.serializeAs_GameActionFightInvisibleDetectedMessage(output);
    }

    public serializeAs_GameActionFightInvisibleDetectedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        if(this.cellId < -1 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeShort(this.cellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightInvisibleDetectedMessage(input);
    }

    private deserializeAs_GameActionFightInvisibleDetectedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._cellIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightInvisibleDetectedMessage.targetId.");
        }
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readShort();
        if(this.cellId < -1 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightInvisibleDetectedMessage.cellId.");
        }
    }

}