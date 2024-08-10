import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildCharacsUpgradeRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 237;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public charaTypeTarget: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildCharacsUpgradeRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildCharacsUpgradeRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildCharacsUpgradeRequestMessage.endpointServer;
    }

    public initGuildCharacsUpgradeRequestMessage(charaTypeTarget: number = 0): GuildCharacsUpgradeRequestMessage
    {
        this.charaTypeTarget = charaTypeTarget;
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
        this.serializeAs_GuildCharacsUpgradeRequestMessage(output);
    }

    public serializeAs_GuildCharacsUpgradeRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.charaTypeTarget);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildCharacsUpgradeRequestMessage(input);
    }

    private deserializeAs_GuildCharacsUpgradeRequestMessage(input: ICustomDataInput)
    {
        this._charaTypeTargetFunc(input);
    }

    private _charaTypeTargetFunc(input: ICustomDataInput)
    {
        this.charaTypeTarget = input.readByte();
        if(this.charaTypeTarget < 0)
        {
            throw new Error("Forbidden value (" + this.charaTypeTarget + ") on element of GuildCharacsUpgradeRequestMessage.charaTypeTarget.");
        }
    }

}