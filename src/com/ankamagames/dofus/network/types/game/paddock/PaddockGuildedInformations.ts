import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PaddockBuyableInformations } from "./PaddockBuyableInformations";

export class PaddockGuildedInformations extends PaddockBuyableInformations implements INetworkType
{

	public static readonly protocolId: number = 4294;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public deserted: boolean = false;
	public guildInfo: GuildInformations;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
    }

    public getTypeId()
    {
        return PaddockGuildedInformations.protocolId;
    }

    public isEndpointClient()
    {
        return PaddockGuildedInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return PaddockGuildedInformations.endpointServer;
    }

    public initPaddockGuildedInformations(price: number = 0, locked: boolean = false, deserted: boolean = false, guildInfo: GuildInformations = null): PaddockGuildedInformations
    {
        super.initPaddockBuyableInformations(price,locked);
        this.deserted = deserted;
        this.guildInfo = guildInfo;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockGuildedInformations(output);
    }

    public serializeAs_PaddockGuildedInformations(output: ICustomDataOutput)
    {
        super.serializeAs_PaddockBuyableInformations(output);
        output.writeBoolean(this.deserted);
        this.guildInfo.serializeAs_GuildInformations(output);
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