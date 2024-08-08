import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPauseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1045;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public isPaused: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightPauseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightPauseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightPauseMessage.endpointServer;
    }

    public initGameFightPauseMessage(isPaused: boolean = false): GameFightPauseMessage
    {
        this.isPaused = isPaused;
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
        this.serializeAs_GameFightPauseMessage(output);
    }

    public serializeAs_GameFightPauseMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.isPaused);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPauseMessage(input);
    }

    private deserializeAs_GameFightPauseMessage(input: ICustomDataInput)
    {
        this._isPausedFunc(input);
    }

    private _isPausedFunc(input: ICustomDataInput)
    {
        this.isPaused = input.readBoolean();
    }

}