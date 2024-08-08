import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ArenaFighterIdleMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1701;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ArenaFighterIdleMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ArenaFighterIdleMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ArenaFighterIdleMessage.endpointServer;
    }

    public initArenaFighterIdleMessage(): ArenaFighterIdleMessage
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
        this.serializeAs_ArenaFighterIdleMessage(output);
    }

    public serializeAs_ArenaFighterIdleMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ArenaFighterIdleMessage(input);
    }

    private deserializeAs_ArenaFighterIdleMessage(input: ICustomDataInput)
    {

    }

}