import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationPresenceMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9885;

	public isApplication: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildApplicationPresenceMessage.protocolId;
    }

    public initGuildApplicationPresenceMessage(isApplication: boolean = false): GuildApplicationPresenceMessage
    {
        this.isApplication = isApplication;
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
        this.serializeAs_GuildApplicationPresenceMessage(output);
    }

    public serializeAs_GuildApplicationPresenceMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.isApplication);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildApplicationPresenceMessage(input);
    }

    private deserializeAs_GuildApplicationPresenceMessage(input: ICustomDataInput)
    {
        this._isApplicationFunc(input);
    }

    private _isApplicationFunc(input: ICustomDataInput)
    {
        this.isApplication = input.readBoolean();
    }

}