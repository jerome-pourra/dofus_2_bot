import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayPlayerFightRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6628;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public targetId: number = 0;
	public targetCellId: number = 0;
	public friendly: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayPlayerFightRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayPlayerFightRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayPlayerFightRequestMessage.endpointServer;
    }

    public initGameRolePlayPlayerFightRequestMessage(targetId: number = 0, targetCellId: number = 0, friendly: boolean = false): GameRolePlayPlayerFightRequestMessage
    {
        this.targetId = targetId;
        this.targetCellId = targetCellId;
        this.friendly = friendly;
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
        this.serializeAs_GameRolePlayPlayerFightRequestMessage(output);
    }

    public serializeAs_GameRolePlayPlayerFightRequestMessage(output: ICustomDataOutput)
    {
        if(this.targetId < 0 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeVarLong(this.targetId);
        if(this.targetCellId < -1 || this.targetCellId > 559)
        {
            throw new Error("Forbidden value (" + this.targetCellId + ") on element targetCellId.");
        }
        output.writeShort(this.targetCellId);
        output.writeBoolean(this.friendly);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayPlayerFightRequestMessage(input);
    }

    private deserializeAs_GameRolePlayPlayerFightRequestMessage(input: ICustomDataInput)
    {
        this._targetIdFunc(input);
        this._targetCellIdFunc(input);
        this._friendlyFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readVarUhLong();
        if(this.targetId < 0 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameRolePlayPlayerFightRequestMessage.targetId.");
        }
    }

    private _targetCellIdFunc(input: ICustomDataInput)
    {
        this.targetCellId = input.readShort();
        if(this.targetCellId < -1 || this.targetCellId > 559)
        {
            throw new Error("Forbidden value (" + this.targetCellId + ") on element of GameRolePlayPlayerFightRequestMessage.targetCellId.");
        }
    }

    private _friendlyFunc(input: ICustomDataInput)
    {
        this.friendly = input.readBoolean();
    }

}