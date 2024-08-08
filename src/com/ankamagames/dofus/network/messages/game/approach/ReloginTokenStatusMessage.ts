import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ReloginTokenStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2673;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public validToken: boolean = false;
	public token: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ReloginTokenStatusMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ReloginTokenStatusMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ReloginTokenStatusMessage.endpointServer;
    }

    public initReloginTokenStatusMessage(validToken: boolean = false, token: string = ""): ReloginTokenStatusMessage
    {
        this.validToken = validToken;
        this.token = token;
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
        this.serializeAs_ReloginTokenStatusMessage(output);
    }

    public serializeAs_ReloginTokenStatusMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.validToken);
        output.writeUTF(this.token);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ReloginTokenStatusMessage(input);
    }

    private deserializeAs_ReloginTokenStatusMessage(input: ICustomDataInput)
    {
        this._validTokenFunc(input);
        this._tokenFunc(input);
    }

    private _validTokenFunc(input: ICustomDataInput)
    {
        this.validToken = input.readBoolean();
    }

    private _tokenFunc(input: ICustomDataInput)
    {
        this.token = input.readUTF();
    }

}