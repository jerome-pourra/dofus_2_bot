import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectErrorMessage } from "./SymbioticObjectErrorMessage";

export class MimicryObjectErrorMessage extends SymbioticObjectErrorMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3920;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public preview: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MimicryObjectErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MimicryObjectErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MimicryObjectErrorMessage.endpointServer;
    }

    public initMimicryObjectErrorMessage(reason: number = 0, errorCode: number = 0, preview: boolean = false): MimicryObjectErrorMessage
    {
        super.initSymbioticObjectErrorMessage(reason,errorCode);
        this.preview = preview;
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
        this.serializeAs_MimicryObjectErrorMessage(output);
    }

    public serializeAs_MimicryObjectErrorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SymbioticObjectErrorMessage(output);
        output.writeBoolean(this.preview);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MimicryObjectErrorMessage(input);
    }

    private deserializeAs_MimicryObjectErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._previewFunc(input);
    }

    private _previewFunc(input: ICustomDataInput)
    {
        this.preview = input.readBoolean();
    }

}