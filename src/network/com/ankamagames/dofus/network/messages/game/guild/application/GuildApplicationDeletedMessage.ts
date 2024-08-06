import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationDeletedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8782;

	public deleted: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildApplicationDeletedMessage.protocolId;
    }

    public initGuildApplicationDeletedMessage(deleted: boolean = false): GuildApplicationDeletedMessage
    {
        this.deleted = deleted;
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
        this.serializeAs_GuildApplicationDeletedMessage(output);
    }

    public serializeAs_GuildApplicationDeletedMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.deleted);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildApplicationDeletedMessage(input);
    }

    private deserializeAs_GuildApplicationDeletedMessage(input: ICustomDataInput)
    {
        this._deletedFunc(input);
    }

    private _deletedFunc(input: ICustomDataInput)
    {
        this.deleted = input.readBoolean();
    }

}