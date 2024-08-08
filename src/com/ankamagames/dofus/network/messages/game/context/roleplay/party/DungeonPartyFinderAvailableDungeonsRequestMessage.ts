import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DungeonPartyFinderAvailableDungeonsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9426;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DungeonPartyFinderAvailableDungeonsRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DungeonPartyFinderAvailableDungeonsRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DungeonPartyFinderAvailableDungeonsRequestMessage.endpointServer;
    }

    public initDungeonPartyFinderAvailableDungeonsRequestMessage(): DungeonPartyFinderAvailableDungeonsRequestMessage
    {
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
        this.serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(output);
    }

    public serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(input);
    }

    private deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(input: ICustomDataInput)
    {

    }

}