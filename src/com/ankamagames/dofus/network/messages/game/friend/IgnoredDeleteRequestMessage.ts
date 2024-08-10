import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class IgnoredDeleteRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7645;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public accountId: number = 0;
	public session: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return IgnoredDeleteRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return IgnoredDeleteRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return IgnoredDeleteRequestMessage.endpointServer;
    }

    public initIgnoredDeleteRequestMessage(accountId: number = 0, session: boolean = false): IgnoredDeleteRequestMessage
    {
        this.accountId = accountId;
        this.session = session;
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
        this.serializeAs_IgnoredDeleteRequestMessage(output);
    }

    public serializeAs_IgnoredDeleteRequestMessage(output: ICustomDataOutput)
    {
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
        output.writeBoolean(this.session);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IgnoredDeleteRequestMessage(input);
    }

    private deserializeAs_IgnoredDeleteRequestMessage(input: ICustomDataInput)
    {
        this._accountIdFunc(input);
        this._sessionFunc(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of IgnoredDeleteRequestMessage.accountId.");
        }
    }

    private _sessionFunc(input: ICustomDataInput)
    {
        this.session = input.readBoolean();
    }

}