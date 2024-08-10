import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ChatErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6135;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public reason: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatErrorMessage.endpointServer;
    }

    public initChatErrorMessage(reason: number = 0): ChatErrorMessage
    {
        this.reason = reason;
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
        this.serializeAs_ChatErrorMessage(output);
    }

    public serializeAs_ChatErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatErrorMessage(input);
    }

    private deserializeAs_ChatErrorMessage(input: ICustomDataInput)
    {
        this._reasonFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of ChatErrorMessage.reason.");
        }
    }

}