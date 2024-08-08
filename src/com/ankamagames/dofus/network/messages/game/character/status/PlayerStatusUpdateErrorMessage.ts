import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PlayerStatusUpdateErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3860;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PlayerStatusUpdateErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PlayerStatusUpdateErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PlayerStatusUpdateErrorMessage.endpointServer;
    }

    public initPlayerStatusUpdateErrorMessage(): PlayerStatusUpdateErrorMessage
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
        this.serializeAs_PlayerStatusUpdateErrorMessage(output);
    }

    public serializeAs_PlayerStatusUpdateErrorMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerStatusUpdateErrorMessage(input);
    }

    private deserializeAs_PlayerStatusUpdateErrorMessage(input: ICustomDataInput)
    {

    }

}