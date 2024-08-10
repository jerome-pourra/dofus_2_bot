import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightTeleportOnSameMapMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9922;

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
        return GameActionFightTeleportOnSameMapMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightTeleportOnSameMapMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightTeleportOnSameMapMessage.endpointServer;
    }

    public initGameActionFightTeleportOnSameMapMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, cellId: number = 0): GameActionFightTeleportOnSameMapMessage
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
        this.serializeAs_GameActionFightTeleportOnSameMapMessage(output);
    }

    public serializeAs_GameActionFightTeleportOnSameMapMessage(output: ICustomDataOutput)
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
        this.deserializeAs_GameActionFightTeleportOnSameMapMessage(input);
    }

    private deserializeAs_GameActionFightTeleportOnSameMapMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightTeleportOnSameMapMessage.targetId.");
        }
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readShort();
        if(this.cellId < -1 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightTeleportOnSameMapMessage.cellId.");
        }
    }

}