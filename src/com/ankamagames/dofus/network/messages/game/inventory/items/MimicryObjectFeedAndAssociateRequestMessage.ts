import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectAssociateRequestMessage } from "./SymbioticObjectAssociateRequestMessage";

export class MimicryObjectFeedAndAssociateRequestMessage extends SymbioticObjectAssociateRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3754;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public foodUID: number = 0;
	public foodPos: number = 0;
	public preview: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MimicryObjectFeedAndAssociateRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MimicryObjectFeedAndAssociateRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MimicryObjectFeedAndAssociateRequestMessage.endpointServer;
    }

    public initMimicryObjectFeedAndAssociateRequestMessage(symbioteUID: number = 0, symbiotePos: number = 0, hostUID: number = 0, hostPos: number = 0, foodUID: number = 0, foodPos: number = 0, preview: boolean = false): MimicryObjectFeedAndAssociateRequestMessage
    {
        super.initSymbioticObjectAssociateRequestMessage(symbioteUID,symbiotePos,hostUID,hostPos);
        this.foodUID = foodUID;
        this.foodPos = foodPos;
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
        this.serializeAs_MimicryObjectFeedAndAssociateRequestMessage(output);
    }

    public serializeAs_MimicryObjectFeedAndAssociateRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SymbioticObjectAssociateRequestMessage(output);
        if(this.foodUID < 0)
        {
            throw new Error("Forbidden value (" + this.foodUID + ") on element foodUID.");
        }
        output.writeVarInt(this.foodUID);
        if(this.foodPos < 0 || this.foodPos > 255)
        {
            throw new Error("Forbidden value (" + this.foodPos + ") on element foodPos.");
        }
        output.writeByte(this.foodPos);
        output.writeBoolean(this.preview);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(input);
    }

    private deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._foodUIDFunc(input);
        this._foodPosFunc(input);
        this._previewFunc(input);
    }

    private _foodUIDFunc(input: ICustomDataInput)
    {
        this.foodUID = input.readVarUhInt();
        if(this.foodUID < 0)
        {
            throw new Error("Forbidden value (" + this.foodUID + ") on element of MimicryObjectFeedAndAssociateRequestMessage.foodUID.");
        }
    }

    private _foodPosFunc(input: ICustomDataInput)
    {
        this.foodPos = input.readUnsignedByte();
        if(this.foodPos < 0 || this.foodPos > 255)
        {
            throw new Error("Forbidden value (" + this.foodPos + ") on element of MimicryObjectFeedAndAssociateRequestMessage.foodPos.");
        }
    }

    private _previewFunc(input: ICustomDataInput)
    {
        this.preview = input.readBoolean();
    }

}