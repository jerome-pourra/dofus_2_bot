import { CharacterCharacteristics } from "./../../types/game/character/characteristic/CharacterCharacteristics";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class DumpedEntityStatsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2370;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public actorId: number = 0;
	public stats: CharacterCharacteristics;

    public constructor()
    {
        super();
        this.stats = new CharacterCharacteristics();
    }

    public getMessageId()
    {
        return DumpedEntityStatsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DumpedEntityStatsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DumpedEntityStatsMessage.endpointServer;
    }

    public initDumpedEntityStatsMessage(actorId: number = 0, stats: CharacterCharacteristics = null): DumpedEntityStatsMessage
    {
        this.actorId = actorId;
        this.stats = stats;
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
        this.serializeAs_DumpedEntityStatsMessage(output);
    }

    public serializeAs_DumpedEntityStatsMessage(output: ICustomDataOutput)
    {
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element actorId.");
        }
        output.writeDouble(this.actorId);
        this.stats.serializeAs_CharacterCharacteristics(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DumpedEntityStatsMessage(input);
    }

    private deserializeAs_DumpedEntityStatsMessage(input: ICustomDataInput)
    {
        this._actorIdFunc(input);
        this.stats = new CharacterCharacteristics();
        this.stats.deserialize(input);
    }

    private _actorIdFunc(input: ICustomDataInput)
    {
        this.actorId = input.readDouble();
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element of DumpedEntityStatsMessage.actorId.");
        }
    }

}