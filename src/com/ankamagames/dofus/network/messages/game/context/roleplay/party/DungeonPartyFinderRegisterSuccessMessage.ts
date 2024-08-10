import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DungeonPartyFinderRegisterSuccessMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9509;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public dungeonIds: Array<number>;

    public constructor()
    {
        super();
        this.dungeonIds = Array<number>();
    }

    public getMessageId()
    {
        return DungeonPartyFinderRegisterSuccessMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DungeonPartyFinderRegisterSuccessMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DungeonPartyFinderRegisterSuccessMessage.endpointServer;
    }

    public initDungeonPartyFinderRegisterSuccessMessage(dungeonIds: Array<number> = null): DungeonPartyFinderRegisterSuccessMessage
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
        this.serializeAs_DungeonPartyFinderRegisterSuccessMessage(output);
    }

    public serializeAs_DungeonPartyFinderRegisterSuccessMessage(output: ICustomDataOutput)
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
        this.deserializeAs_DungeonPartyFinderRegisterSuccessMessage(input);
    }

    private deserializeAs_DungeonPartyFinderRegisterSuccessMessage(input: ICustomDataInput)
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