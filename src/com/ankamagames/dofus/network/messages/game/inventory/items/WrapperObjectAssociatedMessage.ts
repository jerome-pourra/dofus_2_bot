import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectAssociatedMessage } from "./SymbioticObjectAssociatedMessage";

export class WrapperObjectAssociatedMessage extends SymbioticObjectAssociatedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3871;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return WrapperObjectAssociatedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return WrapperObjectAssociatedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return WrapperObjectAssociatedMessage.endpointServer;
    }

    public initWrapperObjectAssociatedMessage(hostUID: number = 0): WrapperObjectAssociatedMessage
    {
        super.initSymbioticObjectAssociatedMessage(hostUID);
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
        this.serializeAs_WrapperObjectAssociatedMessage(output);
    }

    public serializeAs_WrapperObjectAssociatedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SymbioticObjectAssociatedMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_WrapperObjectAssociatedMessage(input);
    }

    private deserializeAs_WrapperObjectAssociatedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}