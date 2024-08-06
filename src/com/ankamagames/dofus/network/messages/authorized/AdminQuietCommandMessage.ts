import { Uuid } from "./../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { AdminCommandMessage } from "./AdminCommandMessage";

export class AdminQuietCommandMessage extends AdminCommandMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8282;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AdminQuietCommandMessage.protocolId;
    }

    public initAdminQuietCommandMessage(messageUuid: Uuid = null, content: string = ""): AdminQuietCommandMessage
    {
        super.initAdminCommandMessage(messageUuid,content);
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
        this.serializeAs_AdminQuietCommandMessage(output);
    }

    public serializeAs_AdminQuietCommandMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AdminCommandMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AdminQuietCommandMessage(input);
    }

    private deserializeAs_AdminQuietCommandMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}