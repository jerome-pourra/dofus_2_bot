import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameActionFightCastRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6438;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public spellId: number = 0;
	public cellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightCastRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightCastRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightCastRequestMessage.endpointServer;
    }

    public initGameActionFightCastRequestMessage(spellId: number = 0, cellId: number = 0): GameActionFightCastRequestMessage
    {
        this.spellId = spellId;
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
        this.serializeAs_GameActionFightCastRequestMessage(output);
    }

    public serializeAs_GameActionFightCastRequestMessage(output: ICustomDataOutput)
    {
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
        if(this.cellId < -1 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeShort(this.cellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightCastRequestMessage(input);
    }

    private deserializeAs_GameActionFightCastRequestMessage(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
        this._cellIdFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightCastRequestMessage.spellId.");
        }
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readShort();
        if(this.cellId < -1 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightCastRequestMessage.cellId.");
        }
    }

}