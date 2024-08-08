import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DungeonPartyFinderListenRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9359;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public dungeonId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DungeonPartyFinderListenRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DungeonPartyFinderListenRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DungeonPartyFinderListenRequestMessage.endpointServer;
    }

    public initDungeonPartyFinderListenRequestMessage(dungeonId: number = 0): DungeonPartyFinderListenRequestMessage
    {
        this.dungeonId = dungeonId;
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
        this.serializeAs_DungeonPartyFinderListenRequestMessage(output);
    }

    public serializeAs_DungeonPartyFinderListenRequestMessage(output: ICustomDataOutput)
    {
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonPartyFinderListenRequestMessage(input);
    }

    private deserializeAs_DungeonPartyFinderListenRequestMessage(input: ICustomDataInput)
    {
        this._dungeonIdFunc(input);
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonPartyFinderListenRequestMessage.dungeonId.");
        }
    }

}