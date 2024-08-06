import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountSterilizedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9430;

	public mountId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountSterilizedMessage.protocolId;
    }

    public initMountSterilizedMessage(mountId: number = 0): MountSterilizedMessage
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
        this.serializeAs_MountSterilizedMessage(output);
    }

    public serializeAs_MountSterilizedMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.mountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountSterilizedMessage(input);
    }

    private deserializeAs_MountSterilizedMessage(input: ICustomDataInput)
    {
        this._mountIdFunc(input);
    }

    private _mountIdFunc(input: ICustomDataInput)
    {
        this.mountId = input.readVarInt();
    }

}