import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GuildPlayerApplicationAbstractMessage } from "./GuildPlayerApplicationAbstractMessage";

export class GuildPlayerNoApplicationInformationMessage extends GuildPlayerApplicationAbstractMessage
{

	public static readonly protocolId: number = 6961;

    public constructor()
    {
        super();
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
        this.deserializeAs_GuildPlayerNoApplicationInformationMessage(input);
    }

    private deserializeAs_GuildPlayerNoApplicationInformationMessage(input: ICustomDataInput)
    {

    }

}