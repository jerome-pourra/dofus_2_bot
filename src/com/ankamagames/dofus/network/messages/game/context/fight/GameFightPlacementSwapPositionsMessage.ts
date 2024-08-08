import { IdentifiedEntityDispositionInformations } from "./../../../../types/game/context/IdentifiedEntityDispositionInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5606;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public dispositions: Array<IdentifiedEntityDispositionInformations>;

    public constructor()
    {
        super();
        this.dispositions = Array<IdentifiedEntityDispositionInformations>(2);
    }

    public getMessageId()
    {
        return GameFightPlacementSwapPositionsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightPlacementSwapPositionsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightPlacementSwapPositionsMessage.endpointServer;
    }

    public initGameFightPlacementSwapPositionsMessage(dispositions: Array<IdentifiedEntityDispositionInformations> = null): GameFightPlacementSwapPositionsMessage
    {
        this.dispositions = dispositions;
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
        this.serializeAs_GameFightPlacementSwapPositionsMessage(output);
    }

    public serializeAs_GameFightPlacementSwapPositionsMessage(output: ICustomDataOutput)
    {
        for(var _i1: number = 0; _i1 < 2; _i1++)
        {
            this.dispositions[_i1].serializeAs_IdentifiedEntityDispositionInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPlacementSwapPositionsMessage(input);
    }

    private deserializeAs_GameFightPlacementSwapPositionsMessage(input: ICustomDataInput)
    {
        for(let _i1: number = 0; _i1 < 2; _i1++)
        {
            this.dispositions[_i1] = new IdentifiedEntityDispositionInformations();
            this.dispositions[_i1].deserialize(input);
        }
    }

}