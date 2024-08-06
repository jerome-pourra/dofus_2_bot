import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceDeleteApplicationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6027;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceDeleteApplicationRequestMessage.protocolId;
    }

    public initAllianceDeleteApplicationRequestMessage(): AllianceDeleteApplicationRequestMessage
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
        this.serializeAs_AllianceDeleteApplicationRequestMessage(output);
    }

    public serializeAs_AllianceDeleteApplicationRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceDeleteApplicationRequestMessage(input);
    }

    private deserializeAs_AllianceDeleteApplicationRequestMessage(input: ICustomDataInput)
    {

    }

}