import { GuildInformations } from "./../../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationIsAnsweredMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3637;

	public accepted: boolean = false;
	public guildInformation: GuildInformations;

    public constructor()
    {
        super();
        this.guildInformation = new GuildInformations();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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