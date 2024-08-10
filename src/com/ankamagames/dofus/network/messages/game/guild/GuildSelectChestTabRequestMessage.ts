import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildSelectChestTabRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7367;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public tabNumber: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildSelectChestTabRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildSelectChestTabRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildSelectChestTabRequestMessage.endpointServer;
    }

    public initGuildSelectChestTabRequestMessage(tabNumber: number = 0): GuildSelectChestTabRequestMessage
    {
        this.tabNumber = tabNumber;
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
        this.serializeAs_GuildSelectChestTabRequestMessage(output);
    }

    public serializeAs_GuildSelectChestTabRequestMessage(output: ICustomDataOutput)
    {
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element tabNumber.");
        }
        output.writeVarInt(this.tabNumber);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildSelectChestTabRequestMessage(input);
    }

    private deserializeAs_GuildSelectChestTabRequestMessage(input: ICustomDataInput)
    {
        this._tabNumberFunc(input);
    }

    private _tabNumberFunc(input: ICustomDataInput)
    {
        this.tabNumber = input.readVarUhInt();
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element of GuildSelectChestTabRequestMessage.tabNumber.");
        }
    }

}