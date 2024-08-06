import { GuildInformations } from "./../../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationIsAnsweredMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3637;

	public accepted: boolean = false;
	public guildInformation: GuildInformations;

    public constructor()
    {
        super();
        this.guildInformation = new GuildInformations();
    }

    public getMessageId()
    {
        return GuildApplicationIsAnsweredMessage.protocolId;
    }

    public initGuildApplicationIsAnsweredMessage(accepted: boolean = false, guildInformation: GuildInformations = null): GuildApplicationIsAnsweredMessage
    {
        this.accepted = accepted;
        this.guildInformation = guildInformation;
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
        this.serializeAs_GuildApplicationIsAnsweredMessage(output);
    }

    public serializeAs_GuildApplicationIsAnsweredMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accepted);
        this.guildInformation.serializeAs_GuildInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildApplicationIsAnsweredMessage(input);
    }

    private deserializeAs_GuildApplicationIsAnsweredMessage(input: ICustomDataInput)
    {
        this._acceptedFunc(input);
        this.guildInformation = new GuildInformations();
        this.guildInformation.deserialize(input);
    }

    private _acceptedFunc(input: ICustomDataInput)
    {
        this.accepted = input.readBoolean();
    }

}