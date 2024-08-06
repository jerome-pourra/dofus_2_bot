import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceMemberStartWarningOnConnectionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3707;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceMemberStartWarningOnConnectionMessage.protocolId;
    }

    public initAllianceMemberStartWarningOnConnectionMessage(): AllianceMemberStartWarningOnConnectionMessage
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
        this.serializeAs_AllianceMemberStartWarningOnConnectionMessage(output);
    }

    public serializeAs_AllianceMemberStartWarningOnConnectionMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMemberStartWarningOnConnectionMessage(input);
    }

    private deserializeAs_AllianceMemberStartWarningOnConnectionMessage(input: ICustomDataInput)
    {

    }

}