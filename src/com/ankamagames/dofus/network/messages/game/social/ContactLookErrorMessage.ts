import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ContactLookErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6346;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public requestId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ContactLookErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ContactLookErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ContactLookErrorMessage.endpointServer;
    }

    public initContactLookErrorMessage(requestId: number = 0): ContactLookErrorMessage
    {
        this.requestId = requestId;
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
        this.serializeAs_ContactLookErrorMessage(output);
    }

    public serializeAs_ContactLookErrorMessage(output: ICustomDataOutput)
    {
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
        }
        output.writeVarInt(this.requestId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ContactLookErrorMessage(input);
    }

    private deserializeAs_ContactLookErrorMessage(input: ICustomDataInput)
    {
        this._requestIdFunc(input);
    }

    private _requestIdFunc(input: ICustomDataInput)
    {
        this.requestId = input.readVarUhInt();
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element of ContactLookErrorMessage.requestId.");
        }
    }

}