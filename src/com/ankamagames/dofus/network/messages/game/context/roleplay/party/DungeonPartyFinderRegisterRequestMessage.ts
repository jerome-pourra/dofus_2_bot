import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DungeonPartyFinderRegisterRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7102;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public dungeonIds: Array<number>;

    public constructor()
    {
        super();
        this.dungeonIds = Array<number>();
    }

    public getMessageId()
    {
        return DungeonPartyFinderRegisterRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DungeonPartyFinderRegisterRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DungeonPartyFinderRegisterRequestMessage.endpointServer;
    }

    public initDungeonPartyFinderRegisterRequestMessage(dungeonIds: Array<number> = null): DungeonPartyFinderRegisterRequestMessage
    {
        this.dungeonIds = dungeonIds;
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
        this.serializeAs_DungeonPartyFinderRegisterRequestMessage(output);
    }

    public serializeAs_DungeonPartyFinderRegisterRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.dungeonIds.length);
        for(var _i1: number = 0; _i1 < this.dungeonIds.length; _i1++)
        {
            if(this.dungeonIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.dungeonIds[_i1] + ") on element 1 (starting at 1) of dungeonIds.");
            }
            output.writeVarShort(this.dungeonIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonPartyFinderRegisterRequestMessage(input);
    }

    private deserializeAs_DungeonPartyFinderRegisterRequestMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _dungeonIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _dungeonIdsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of dungeonIds.");
            }
            this.dungeonIds.push(_val1);
        }
    }

}