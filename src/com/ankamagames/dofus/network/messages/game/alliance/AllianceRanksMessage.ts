import { RankInformation } from "./../../../types/game/rank/RankInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceRanksMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4427;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public ranks: Array<RankInformation>;

    public constructor()
    {
        super();
        this.ranks = Array<RankInformation>();
    }

    public getMessageId()
    {
        return AllianceRanksMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceRanksMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceRanksMessage.endpointServer;
    }

    public initAllianceRanksMessage(ranks: Array<RankInformation> = null): AllianceRanksMessage
    {
        this.ranks = ranks;
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
        this.serializeAs_AllianceRanksMessage(output);
    }

    public serializeAs_AllianceRanksMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.ranks.length);
        for(var _i1: number = 0; _i1 < this.ranks.length; _i1++)
        {
            (this.ranks[_i1] as RankInformation).serializeAs_RankInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceRanksMessage(input);
    }

    private deserializeAs_AllianceRanksMessage(input: ICustomDataInput)
    {
        let _item1: RankInformation;
        let _ranksLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _ranksLen; _i1++)
        {
            _item1 = new RankInformation();
            _item1.deserialize(input);
            this.ranks.push(_item1);
        }
    }

}