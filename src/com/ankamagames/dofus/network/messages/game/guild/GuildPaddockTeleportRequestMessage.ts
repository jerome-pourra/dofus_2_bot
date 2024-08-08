import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildPaddockTeleportRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8533;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public paddockId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildPaddockTeleportRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildPaddockTeleportRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildPaddockTeleportRequestMessage.endpointServer;
    }

    public initGuildPaddockTeleportRequestMessage(paddockId: number = 0): GuildPaddockTeleportRequestMessage
    {
        this.paddockId = paddockId;
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
        this.serializeAs_GuildPaddockTeleportRequestMessage(output);
    }

    public serializeAs_GuildPaddockTeleportRequestMessage(output: ICustomDataOutput)
    {
        if(this.paddockId < 0 || this.paddockId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.paddockId + ") on element paddockId.");
        }
        output.writeDouble(this.paddockId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPaddockTeleportRequestMessage(input);
    }

    private deserializeAs_GuildPaddockTeleportRequestMessage(input: ICustomDataInput)
    {
        this._paddockIdFunc(input);
    }

    private _paddockIdFunc(input: ICustomDataInput)
    {
        this.paddockId = input.readDouble();
        if(this.paddockId < 0 || this.paddockId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.paddockId + ") on element of GuildPaddockTeleportRequestMessage.paddockId.");
        }
    }

}