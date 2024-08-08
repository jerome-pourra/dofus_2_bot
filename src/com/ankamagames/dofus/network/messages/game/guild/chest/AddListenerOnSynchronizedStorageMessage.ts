import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AddListenerOnSynchronizedStorageMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1826;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public player: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AddListenerOnSynchronizedStorageMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AddListenerOnSynchronizedStorageMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AddListenerOnSynchronizedStorageMessage.endpointServer;
    }

    public initAddListenerOnSynchronizedStorageMessage(player: string = ""): AddListenerOnSynchronizedStorageMessage
    {
        this.player = player;
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
        this.serializeAs_AddListenerOnSynchronizedStorageMessage(output);
    }

    public serializeAs_AddListenerOnSynchronizedStorageMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.player);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AddListenerOnSynchronizedStorageMessage(input);
    }

    private deserializeAs_AddListenerOnSynchronizedStorageMessage(input: ICustomDataInput)
    {
        this._playerFunc(input);
    }

    private _playerFunc(input: ICustomDataInput)
    {
        this.player = input.readUTF();
    }

}