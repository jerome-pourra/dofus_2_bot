import { LockableChangeCodeMessage } from "./../lockable/LockableChangeCodeMessage";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";

export class HouseLockFromInsideRequestMessage extends LockableChangeCodeMessage
{

	public static readonly protocolId: number = 9529;

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
        this.deserializeAs_HouseLockFromInsideRequestMessage(input);
    }

    private deserializeAs_HouseLockFromInsideRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}