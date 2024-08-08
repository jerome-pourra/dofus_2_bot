import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RemoveListenerOnSynchronizedStorageMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 91;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public player: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return RemoveListenerOnSynchronizedStorageMessage.protocolId;
    }

    public isEndpointClient()
    {
        return RemoveListenerOnSynchronizedStorageMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return RemoveListenerOnSynchronizedStorageMessage.endpointServer;
    }

    public initRemoveListenerOnSynchronizedStorageMessage(player: string = ""): RemoveListenerOnSynchronizedStorageMessage
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
        this.serializeAs_RemoveListenerOnSynchronizedStorageMessage(output);
    }

    public serializeAs_RemoveListenerOnSynchronizedStorageMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.player);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RemoveListenerOnSynchronizedStorageMessage(input);
    }

    private deserializeAs_RemoveListenerOnSynchronizedStorageMessage(input: ICustomDataInput)
    {
        this._playerFunc(input);
    }

    private _playerFunc(input: ICustomDataInput)
    {
        this.player = input.readUTF();
    }

}