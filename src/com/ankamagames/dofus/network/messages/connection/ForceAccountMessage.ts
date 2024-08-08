import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ForceAccountMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5654;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public accountId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ForceAccountMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ForceAccountMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ForceAccountMessage.endpointServer;
    }

    public initForceAccountMessage(accountId: number = 0): ForceAccountMessage
    {
        this.accountId = accountId;
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
        this.serializeAs_ForceAccountMessage(output);
    }

    public serializeAs_ForceAccountMessage(output: ICustomDataOutput)
    {
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForceAccountMessage(input);
    }

    private deserializeAs_ForceAccountMessage(input: ICustomDataInput)
    {
        this._accountIdFunc(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of ForceAccountMessage.accountId.");
        }
    }

}