import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildModificationNameValidMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5733;

	public guildName: string = "";

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
        this.deserializeAs_GuildModificationNameValidMessage(input);
    }

    private deserializeAs_GuildModificationNameValidMessage(input: ICustomDataInput)
    {
        this._guildNameFunc(input);
    }

    private _guildNameFunc(input: ICustomDataInput)
    {
        this.guildName = input.readUTF();
    }

}