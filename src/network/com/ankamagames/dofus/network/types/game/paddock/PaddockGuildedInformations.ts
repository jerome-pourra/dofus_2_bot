import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PaddockBuyableInformations } from "./PaddockBuyableInformations";

export class PaddockGuildedInformations extends PaddockBuyableInformations
{

	public static readonly protocolId: number = 4294;

	public deserted: boolean = false;
	public guildInfo: GuildInformations;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockGuildedInformations(input);
    }

    private deserializeAs_PaddockGuildedInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._desertedFunc(input);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
    }

    private _desertedFunc(input: ICustomDataInput)
    {
        this.deserted = input.readBoolean();
    }

}