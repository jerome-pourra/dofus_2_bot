import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightReadyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4840;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public isReady: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightReadyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightReadyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightReadyMessage.endpointServer;
    }

    public initGameFightReadyMessage(isReady: boolean = false): GameFightReadyMessage
    {
        this.isReady = isReady;
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
        this.serializeAs_GameFightReadyMessage(output);
    }

    public serializeAs_GameFightReadyMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.isReady);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightReadyMessage(input);
    }

    private deserializeAs_GameFightReadyMessage(input: ICustomDataInput)
    {
        this._isReadyFunc(input);
    }

    private _isReadyFunc(input: ICustomDataInput)
    {
        this.isReady = input.readBoolean();
    }

}