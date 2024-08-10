import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildChestTabLastContributionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 683;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public lastContributionDate: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildChestTabLastContributionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildChestTabLastContributionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildChestTabLastContributionMessage.endpointServer;
    }

    public initGuildChestTabLastContributionMessage(lastContributionDate: number = 0): GuildChestTabLastContributionMessage
    {
        this.lastContributionDate = lastContributionDate;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildChestTabLastContributionMessage(output);
    }

    public serializeAs_GuildChestTabLastContributionMessage(output: ICustomDataOutput)
    {
        if(this.lastContributionDate < 0 || this.lastContributionDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.lastContributionDate + ") on element lastContributionDate.");
        }
        output.writeDouble(this.lastContributionDate);
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