import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountDataMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 137;

	public mountData: MountClientData;

    public constructor()
    {
        super();
        this.mountData = new MountClientData();
    }

    public getMessageId()
    {
        return MountDataMessage.protocolId;
    }

    public initMountDataMessage(mountData: MountClientData = null): MountDataMessage
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
        this.serializeAs_MountDataMessage(output);
    }

    public serializeAs_MountDataMessage(output: ICustomDataOutput)
    {
        this.mountData.serializeAs_MountClientData(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountDataMessage(input);
    }

    private deserializeAs_MountDataMessage(input: ICustomDataInput)
    {
        this.mountData = new MountClientData();
        this.mountData.deserialize(input);
    }

}