import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayFreeSoulRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3818;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayFreeSoulRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayFreeSoulRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayFreeSoulRequestMessage.endpointServer;
    }

    public initGameRolePlayFreeSoulRequestMessage(): GameRolePlayFreeSoulRequestMessage
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
        this.serializeAs_GameRolePlayFreeSoulRequestMessage(output);
    }

    public serializeAs_GameRolePlayFreeSoulRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayFreeSoulRequestMessage(input);
    }

    private deserializeAs_GameRolePlayFreeSoulRequestMessage(input: ICustomDataInput)
    {

    }

}