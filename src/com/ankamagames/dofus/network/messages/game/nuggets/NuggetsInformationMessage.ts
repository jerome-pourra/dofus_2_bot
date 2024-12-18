import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NuggetsInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5214;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public nuggetsQuantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NuggetsInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NuggetsInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NuggetsInformationMessage.endpointServer;
    }

    public initNuggetsInformationMessage(nuggetsQuantity: number = 0): NuggetsInformationMessage
    {
        this.nuggetsQuantity = nuggetsQuantity;
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
        this.serializeAs_NuggetsInformationMessage(output);
    }

    public serializeAs_NuggetsInformationMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.nuggetsQuantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NuggetsInformationMessage(input);
    }

    private deserializeAs_NuggetsInformationMessage(input: ICustomDataInput)
    {
        this._nuggetsQuantityFunc(input);
    }

    private _nuggetsQuantityFunc(input: ICustomDataInput)
    {
        this.nuggetsQuantity = input.readInt();
    }

}