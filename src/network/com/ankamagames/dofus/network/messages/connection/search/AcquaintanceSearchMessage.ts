import { AccountTagInformation } from "./../../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AcquaintanceSearchMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1642;

	public tag: AccountTagInformation;

    public constructor()
    {
        super();
        this.tag = new AccountTagInformation();
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
        this.deserializeAs_AcquaintanceSearchMessage(input);
    }

    private deserializeAs_AcquaintanceSearchMessage(input: ICustomDataInput)
    {
        this.tag = new AccountTagInformation();
        this.tag.deserialize(input);
    }

}