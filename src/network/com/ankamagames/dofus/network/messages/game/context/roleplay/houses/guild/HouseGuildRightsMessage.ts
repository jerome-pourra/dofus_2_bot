import { GuildInformations } from "./../../../../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class HouseGuildRightsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8722;

	public houseId: number = 0;
	public instanceId: number = 0;
	public secondHand: boolean = false;
	public guildInfo: GuildInformations;
	public rights: number = 0;

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
        this.deserializeAs_HouseGuildRightsMessage(input);
    }

    private deserializeAs_HouseGuildRightsMessage(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._instanceIdFunc(input);
        this._secondHandFunc(input);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
        this._rightsFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseGuildRightsMessage.houseId.");
        }
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseGuildRightsMessage.instanceId.");
        }
    }

    private _secondHandFunc(input: ICustomDataInput)
    {
        this.secondHand = input.readBoolean();
    }

    private _rightsFunc(input: ICustomDataInput)
    {
        this.rights = input.readVarUhInt();
        if(this.rights < 0)
        {
            throw new Error("Forbidden value (" + this.rights + ") on element of HouseGuildRightsMessage.rights.");
        }
    }

}