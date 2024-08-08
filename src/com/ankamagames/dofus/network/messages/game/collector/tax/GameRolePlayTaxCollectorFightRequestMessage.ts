import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayTaxCollectorFightRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1944;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayTaxCollectorFightRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayTaxCollectorFightRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayTaxCollectorFightRequestMessage.endpointServer;
    }

    public initGameRolePlayTaxCollectorFightRequestMessage(): GameRolePlayTaxCollectorFightRequestMessage
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
        this.serializeAs_GameRolePlayTaxCollectorFightRequestMessage(output);
    }

    public serializeAs_GameRolePlayTaxCollectorFightRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayTaxCollectorFightRequestMessage(input);
    }

    private deserializeAs_GameRolePlayTaxCollectorFightRequestMessage(input: ICustomDataInput)
    {

    }

}