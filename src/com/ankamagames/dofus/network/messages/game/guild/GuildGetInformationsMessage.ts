import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildGetInformationsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 592;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public infoType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildGetInformationsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildGetInformationsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildGetInformationsMessage.endpointServer;
    }

    public initGuildGetInformationsMessage(infoType: number = 0): GuildGetInformationsMessage
    {
        this.infoType = infoType;
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
        this.serializeAs_GuildGetInformationsMessage(output);
    }

    public serializeAs_GuildGetInformationsMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.infoType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildGetInformationsMessage(input);
    }

    private deserializeAs_GuildGetInformationsMessage(input: ICustomDataInput)
    {
        this._infoTypeFunc(input);
    }

    private _infoTypeFunc(input: ICustomDataInput)
    {
        this.infoType = input.readByte();
        if(this.infoType < 0)
        {
            throw new Error("Forbidden value (" + this.infoType + ") on element of GuildGetInformationsMessage.infoType.");
        }
    }

}