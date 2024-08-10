import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiSessionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4199;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public key: string = "";
	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiSessionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HaapiSessionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HaapiSessionMessage.endpointServer;
    }

    public initHaapiSessionMessage(key: string = "", type: number = 0): HaapiSessionMessage
    {
        this.key = key;
        this.type = type;
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
        this.serializeAs_HaapiSessionMessage(output);
    }

    public serializeAs_HaapiSessionMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.key);
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiSessionMessage(input);
    }

    private deserializeAs_HaapiSessionMessage(input: ICustomDataInput)
    {
        this._keyFunc(input);
        this._typeFunc(input);
    }

    private _keyFunc(input: ICustomDataInput)
    {
        this.key = input.readUTF();
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of HaapiSessionMessage.type.");
        }
    }

}