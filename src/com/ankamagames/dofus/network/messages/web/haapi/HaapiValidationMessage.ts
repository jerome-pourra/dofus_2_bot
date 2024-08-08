import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiValidationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7090;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public action: number = 0;
	public code: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiValidationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HaapiValidationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HaapiValidationMessage.endpointServer;
    }

    public initHaapiValidationMessage(action: number = 0, code: number = 0): HaapiValidationMessage
    {
        this.action = action;
        this.code = code;
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
        this.serializeAs_HaapiValidationMessage(output);
    }

    public serializeAs_HaapiValidationMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.action);
        output.writeByte(this.code);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiValidationMessage(input);
    }

    private deserializeAs_HaapiValidationMessage(input: ICustomDataInput)
    {
        this._actionFunc(input);
        this._codeFunc(input);
    }

    private _actionFunc(input: ICustomDataInput)
    {
        this.action = input.readByte();
        if(this.action < 0)
        {
            throw new Error("Forbidden value (" + this.action + ") on element of HaapiValidationMessage.action.");
        }
    }

    private _codeFunc(input: ICustomDataInput)
    {
        this.code = input.readByte();
        if(this.code < 0)
        {
            throw new Error("Forbidden value (" + this.code + ") on element of HaapiValidationMessage.code.");
        }
    }

}