import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AccessoryPreviewErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9621;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public error: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AccessoryPreviewErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AccessoryPreviewErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AccessoryPreviewErrorMessage.endpointServer;
    }

    public initAccessoryPreviewErrorMessage(error: number = 0): AccessoryPreviewErrorMessage
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
        this.serializeAs_AccessoryPreviewErrorMessage(output);
    }

    public serializeAs_AccessoryPreviewErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.error);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AccessoryPreviewErrorMessage(input);
    }

    private deserializeAs_AccessoryPreviewErrorMessage(input: ICustomDataInput)
    {
        this._errorFunc(input);
    }

    private _errorFunc(input: ICustomDataInput)
    {
        this.error = input.readByte();
        if(this.error < 0)
        {
            throw new Error("Forbidden value (" + this.error + ") on element of AccessoryPreviewErrorMessage.error.");
        }
    }

}