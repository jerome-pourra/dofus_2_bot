import { IdentifiedEntityDispositionInformations } from "./../../../types/game/context/IdentifiedEntityDispositionInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameEntityDispositionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public disposition: IdentifiedEntityDispositionInformations;

    public constructor()
    {
        super();
        this.disposition = new IdentifiedEntityDispositionInformations();
    }

    public getMessageId()
    {
        return GameEntityDispositionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameEntityDispositionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameEntityDispositionMessage.endpointServer;
    }

    public initGameEntityDispositionMessage(disposition: IdentifiedEntityDispositionInformations = null): GameEntityDispositionMessage
    {
        this.disposition = disposition;
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
        this.serializeAs_GameEntityDispositionMessage(output);
    }

    public serializeAs_GameEntityDispositionMessage(output: ICustomDataOutput)
    {
        this.disposition.serializeAs_IdentifiedEntityDispositionInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameEntityDispositionMessage(input);
    }

    private deserializeAs_GameEntityDispositionMessage(input: ICustomDataInput)
    {
        this.disposition = new IdentifiedEntityDispositionInformations();
        this.disposition.deserialize(input);
    }

}