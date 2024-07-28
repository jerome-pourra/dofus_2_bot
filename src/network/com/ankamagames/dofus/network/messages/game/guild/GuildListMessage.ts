import { GuildInformations } from "./../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 669;

	public guilds: Array<GuildInformations>;

    public constructor()
    {
        super();
        this.guilds = Array<GuildInformations>();
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
        this.deserializeAs_GuildListMessage(input);
    }

    private deserializeAs_GuildListMessage(input: ICustomDataInput)
    {
        let _item1: GuildInformations;
        let _guildsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _guildsLen; _i1++)
        {
            _item1 = new GuildInformations();
            _item1.deserialize(input);
            this.guilds.push(_item1);
        }
    }

}