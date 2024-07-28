import { AccountTagInformation } from "./../../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class IgnoredDeleteResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2365;

	public success: boolean = false;
	public tag: AccountTagInformation;
	public session: boolean = false;

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
        this.deserializeAs_IgnoredDeleteResultMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.success = BooleanByteWrapper.getFlag(_box0,0);
        this.session = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_IgnoredDeleteResultMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this.tag = new AccountTagInformation();
        this.tag.deserialize(input);
    }

}