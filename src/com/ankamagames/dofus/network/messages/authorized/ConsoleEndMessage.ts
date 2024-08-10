import { Uuid } from "./../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ConsoleEndMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9802;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public consoleUuid: Uuid;
	public isSuccess: boolean = false;

    public constructor()
    {
        super();
        this.consoleUuid = new Uuid();
    }

    public getMessageId()
    {
        return ConsoleEndMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ConsoleEndMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ConsoleEndMessage.endpointServer;
    }

    public initConsoleEndMessage(consoleUuid: Uuid = null, isSuccess: boolean = false): ConsoleEndMessage
    {
        this.consoleUuid = consoleUuid;
        this.isSuccess = isSuccess;
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
        this.serializeAs_ConsoleEndMessage(output);
    }

    public serializeAs_ConsoleEndMessage(output: ICustomDataOutput)
    {
        this.consoleUuid.serializeAs_Uuid(output);
        output.writeBoolean(this.isSuccess);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ConsoleEndMessage(input);
    }

    private deserializeAs_ConsoleEndMessage(input: ICustomDataInput)
    {
        this.consoleUuid = new Uuid();
        this.consoleUuid.deserialize(input);
        this._isSuccessFunc(input);
    }

    private _isSuccessFunc(input: ICustomDataInput)
    {
        this.isSuccess = input.readBoolean();
    }

}