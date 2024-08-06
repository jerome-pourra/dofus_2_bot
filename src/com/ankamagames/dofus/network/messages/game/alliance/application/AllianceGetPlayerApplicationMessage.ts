import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceGetPlayerApplicationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3631;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceGetPlayerApplicationMessage.protocolId;
    }

    public initAllianceGetPlayerApplicationMessage(): AllianceGetPlayerApplicationMessage
    {
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
        this.serializeAs_AllianceGetPlayerApplicationMessage(output);
    }

    public serializeAs_AllianceGetPlayerApplicationMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceGetPlayerApplicationMessage(input);
    }

    private deserializeAs_AllianceGetPlayerApplicationMessage(input: ICustomDataInput)
    {

    }

}