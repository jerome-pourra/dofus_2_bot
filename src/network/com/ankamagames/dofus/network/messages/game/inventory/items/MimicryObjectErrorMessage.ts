import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectErrorMessage } from "./SymbioticObjectErrorMessage";

export class MimicryObjectErrorMessage extends SymbioticObjectErrorMessage
{

	public static readonly protocolId: number = 3920;

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