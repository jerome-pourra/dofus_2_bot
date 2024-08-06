import { AccountTagInformation } from "./../../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class IgnoredDeleteResultMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return IgnoredDeleteResultMessage.protocolId;
    }

    public initIgnoredDeleteResultMessage(success: boolean = false, tag: AccountTagInformation = null, session: boolean = false): IgnoredDeleteResultMessage
    {
        this.success = success;
        this.tag = tag;
        this.session = session;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_IgnoredDeleteResultMessage(output);
    }

    public serializeAs_IgnoredDeleteResultMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.success);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.session);
        output.writeByte(_box0);
        this.tag.serializeAs_AccountTagInformation(output);
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