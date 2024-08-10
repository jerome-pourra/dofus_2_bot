import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectErrorMessage } from "./SymbioticObjectErrorMessage";

export class WrapperObjectErrorMessage extends SymbioticObjectErrorMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5215;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return WrapperObjectErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return WrapperObjectErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return WrapperObjectErrorMessage.endpointServer;
    }

    public initWrapperObjectErrorMessage(reason: number = 0, errorCode: number = 0): WrapperObjectErrorMessage
    {
        super.initSymbioticObjectErrorMessage(reason,errorCode);
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
        this.serializeAs_WrapperObjectErrorMessage(output);
    }

    public serializeAs_WrapperObjectErrorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SymbioticObjectErrorMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_WrapperObjectErrorMessage(input);
    }

    private deserializeAs_WrapperObjectErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}