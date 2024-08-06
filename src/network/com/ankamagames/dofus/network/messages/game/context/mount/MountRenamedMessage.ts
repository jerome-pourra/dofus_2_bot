import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountRenamedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2688;

	public mountId: number = 0;
	public name: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountRenamedMessage.protocolId;
    }

    public initMountRenamedMessage(mountId: number = 0, name: string = ""): MountRenamedMessage
    {
        this.mountId = mountId;
        this.name = name;
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
        this.serializeAs_MountRenamedMessage(output);
    }

    public serializeAs_MountRenamedMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.mountId);
        output.writeUTF(this.name);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountRenamedMessage(input);
    }

    private deserializeAs_MountRenamedMessage(input: ICustomDataInput)
    {
        this._mountIdFunc(input);
        this._nameFunc(input);
    }

    private _mountIdFunc(input: ICustomDataInput)
    {
        this.mountId = input.readVarInt();
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}