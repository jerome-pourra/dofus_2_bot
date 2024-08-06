import { PaginationRequestAbstractMessage } from "./../../PaginationRequestAbstractMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class AllianceListApplicationRequestMessage extends PaginationRequestAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7241;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceListApplicationRequestMessage.protocolId;
    }

    public initAllianceListApplicationRequestMessage(offset: number = 0, count: number = 0): AllianceListApplicationRequestMessage
    {
        super.initPaginationRequestAbstractMessage(offset,count);
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
        this.serializeAs_AllianceListApplicationRequestMessage(output);
    }

    public serializeAs_AllianceListApplicationRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PaginationRequestAbstractMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceListApplicationRequestMessage(input);
    }

    private deserializeAs_AllianceListApplicationRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}