import { AllianceInformation } from "./../../../types/game/context/roleplay/AllianceInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceJoinedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5220;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public allianceInfo: AllianceInformation;
	public rankId: number = 0;

    public constructor()
    {
        super();
        this.allianceInfo = new AllianceInformation();
    }

    public getMessageId()
    {
        return AllianceJoinedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceJoinedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceJoinedMessage.endpointServer;
    }

    public initAllianceJoinedMessage(allianceInfo: AllianceInformation = null, rankId: number = 0): AllianceJoinedMessage
    {
        this.allianceInfo = allianceInfo;
        this.rankId = rankId;
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
        this.serializeAs_AllianceJoinedMessage(output);
    }

    public serializeAs_AllianceJoinedMessage(output: ICustomDataOutput)
    {
        this.allianceInfo.serializeAs_AllianceInformation(output);
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element rankId.");
        }
        output.writeVarInt(this.rankId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceJoinedMessage(input);
    }

    private deserializeAs_AllianceJoinedMessage(input: ICustomDataInput)
    {
        this.allianceInfo = new AllianceInformation();
        this.allianceInfo.deserialize(input);
        this._rankIdFunc(input);
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of AllianceJoinedMessage.rankId.");
        }
    }

}