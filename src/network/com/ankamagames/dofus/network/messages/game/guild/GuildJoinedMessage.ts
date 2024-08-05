import { GuildInformations } from "./../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildJoinedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2814;

	public guildInfo: GuildInformations;
	public rankId: number = 0;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
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
        this.deserializeAs_GuildJoinedMessage(input);
    }

    private deserializeAs_GuildJoinedMessage(input: ICustomDataInput)
    {
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
        this._rankIdFunc(input);
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of GuildJoinedMessage.rankId.");
        }
    }

}