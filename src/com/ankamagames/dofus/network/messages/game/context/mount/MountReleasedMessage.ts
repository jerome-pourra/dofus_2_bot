import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountReleasedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7843;

	public mountId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountReleasedMessage.protocolId;
    }

    public initMountReleasedMessage(mountId: number = 0): MountReleasedMessage
    {
        this.mountId = mountId;
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
        this.serializeAs_MountReleasedMessage(output);
    }

    public serializeAs_MountReleasedMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.mountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountReleasedMessage(input);
    }

    private deserializeAs_MountReleasedMessage(input: ICustomDataInput)
    {
        this._mountIdFunc(input);
    }

    private _mountIdFunc(input: ICustomDataInput)
    {
        this.mountId = input.readVarInt();
    }

}