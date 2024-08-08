import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarSwapErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6501;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public error: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ShortcutBarSwapErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutBarSwapErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutBarSwapErrorMessage.endpointServer;
    }

    public initShortcutBarSwapErrorMessage(error: number = 0): ShortcutBarSwapErrorMessage
    {
        this.error = error;
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
        this.serializeAs_ShortcutBarSwapErrorMessage(output);
    }

    public serializeAs_ShortcutBarSwapErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.error);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutBarSwapErrorMessage(input);
    }

    private deserializeAs_ShortcutBarSwapErrorMessage(input: ICustomDataInput)
    {
        this._errorFunc(input);
    }

    private _errorFunc(input: ICustomDataInput)
    {
        this.error = input.readByte();
        if(this.error < 0)
        {
            throw new Error("Forbidden value (" + this.error + ") on element of ShortcutBarSwapErrorMessage.error.");
        }
    }

}