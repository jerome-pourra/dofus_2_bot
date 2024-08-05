import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildKickRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9738;

	public kickedId: number = 0;

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
        this.deserializeAs_GuildKickRequestMessage(input);
    }

    private deserializeAs_GuildKickRequestMessage(input: ICustomDataInput)
    {
        this._kickedIdFunc(input);
    }

    private _kickedIdFunc(input: ICustomDataInput)
    {
        this.kickedId = input.readVarUhLong();
        if(this.kickedId < 0 || this.kickedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickedId + ") on element of GuildKickRequestMessage.kickedId.");
        }
    }

}