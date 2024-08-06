import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountRenameRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4115;

	public name: string = "";
	public mountId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountRenameRequestMessage.protocolId;
    }

    public initMountRenameRequestMessage(name: string = "", mountId: number = 0): MountRenameRequestMessage
    {
        this.name = name;
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
        this.serializeAs_MountRenameRequestMessage(output);
    }

    public serializeAs_MountRenameRequestMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.name);
        output.writeVarInt(this.mountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountRenameRequestMessage(input);
    }

    private deserializeAs_MountRenameRequestMessage(input: ICustomDataInput)
    {
        this._nameFunc(input);
        this._mountIdFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _mountIdFunc(input: ICustomDataInput)
    {
        this.mountId = input.readVarInt();
    }

}