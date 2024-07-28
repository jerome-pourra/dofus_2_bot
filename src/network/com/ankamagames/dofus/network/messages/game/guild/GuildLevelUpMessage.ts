import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildLevelUpMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5408;

	public newLevel: number = 0;

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
        this.deserializeAs_GuildLevelUpMessage(input);
    }

    private deserializeAs_GuildLevelUpMessage(input: ICustomDataInput)
    {
        this._newLevelFunc(input);
    }

    private _newLevelFunc(input: ICustomDataInput)
    {
        this.newLevel = input.readUnsignedByte();
        if(this.newLevel < 2 || this.newLevel > 200)
        {
            throw new Error("Forbidden value (" + this.newLevel + ") on element of GuildLevelUpMessage.newLevel.");
        }
    }

}