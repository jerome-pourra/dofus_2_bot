import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectAssociateRequestMessage } from "./SymbioticObjectAssociateRequestMessage";

export class MimicryObjectFeedAndAssociateRequestMessage extends SymbioticObjectAssociateRequestMessage
{

	public static readonly protocolId: number = 3754;

	public foodUID: number = 0;
	public foodPos: number = 0;
	public preview: boolean = false;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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