import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectAssociatedMessage } from "./SymbioticObjectAssociatedMessage";

export class WrapperObjectAssociatedMessage extends SymbioticObjectAssociatedMessage
{

	public static readonly protocolId: number = 3871;

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
        this.deserializeAs_WrapperObjectAssociatedMessage(input);
    }

    private deserializeAs_WrapperObjectAssociatedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}