import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectErrorMessage } from "./SymbioticObjectErrorMessage";

export class WrapperObjectErrorMessage extends SymbioticObjectErrorMessage
{

	public static readonly protocolId: number = 5215;

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
        this.deserializeAs_WrapperObjectErrorMessage(input);
    }

    private deserializeAs_WrapperObjectErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}