import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildChestTabLastContributionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 683;

	public lastContributionDate: number = 0;

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
        this.deserializeAs_GuildChestTabLastContributionMessage(input);
    }

    private deserializeAs_GuildChestTabLastContributionMessage(input: ICustomDataInput)
    {
        this._lastContributionDateFunc(input);
    }

    private _lastContributionDateFunc(input: ICustomDataInput)
    {
        this.lastContributionDate = input.readDouble();
        if(this.lastContributionDate < 0 || this.lastContributionDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.lastContributionDate + ") on element of GuildChestTabLastContributionMessage.lastContributionDate.");
        }
    }

}