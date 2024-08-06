import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountSetMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 110;

	public mountData: MountClientData;

    public constructor()
    {
        super();
        this.mountData = new MountClientData();
    }

    public getMessageId()
    {
        return MountSetMessage.protocolId;
    }

    public initMountSetMessage(mountData: MountClientData = null): MountSetMessage
    {
        this.mountData = mountData;
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
        this.serializeAs_MountSetMessage(output);
    }

    public serializeAs_MountSetMessage(output: ICustomDataOutput)
    {
        this.mountData.serializeAs_MountClientData(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountSetMessage(input);
    }

    private deserializeAs_MountSetMessage(input: ICustomDataInput)
    {
        this.mountData = new MountClientData();
        this.mountData.deserialize(input);
    }

}