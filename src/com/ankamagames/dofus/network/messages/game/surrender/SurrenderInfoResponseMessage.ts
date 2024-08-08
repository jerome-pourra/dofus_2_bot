import { SurrenderResponse } from "./../../../types/game/surrender/SurrenderResponse";
import { SurrenderVoteResponse } from "./../../../types/game/surrender/vote/SurrenderVoteResponse";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SurrenderInfoResponseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 99;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public hasSanction: boolean = false;
	public surrenderResponse: SurrenderResponse;
	public surrenderVoteResponse: SurrenderVoteResponse;

    public constructor()
    {
        super();
        this.surrenderResponse = new SurrenderResponse();
        this.surrenderVoteResponse = new SurrenderVoteResponse();
    }

    public getMessageId()
    {
        return SurrenderInfoResponseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderInfoResponseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderInfoResponseMessage.endpointServer;
    }

    public initSurrenderInfoResponseMessage(hasSanction: boolean = false, surrenderResponse: SurrenderResponse = null, surrenderVoteResponse: SurrenderVoteResponse = null): SurrenderInfoResponseMessage
    {
        this.hasSanction = hasSanction;
        this.surrenderResponse = surrenderResponse;
        this.surrenderVoteResponse = surrenderVoteResponse;
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
        this.serializeAs_SurrenderInfoResponseMessage(output);
    }

    public serializeAs_SurrenderInfoResponseMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.hasSanction);
        output.writeShort(this.surrenderResponse.getTypeId());
        this.surrenderResponse.serialize(output);
        output.writeShort(this.surrenderVoteResponse.getTypeId());
        this.surrenderVoteResponse.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderInfoResponseMessage(input);
    }

    private deserializeAs_SurrenderInfoResponseMessage(input: ICustomDataInput)
    {
        this._hasSanctionFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.surrenderResponse = ProtocolTypeManager.getInstance(SurrenderResponse,_id2);
        this.surrenderResponse.deserialize(input);
        let _id3: number = input.readUnsignedShort();
        this.surrenderVoteResponse = ProtocolTypeManager.getInstance(SurrenderVoteResponse,_id3);
        this.surrenderVoteResponse.deserialize(input);
    }

    private _hasSanctionFunc(input: ICustomDataInput)
    {
        this.hasSanction = input.readBoolean();
    }

}