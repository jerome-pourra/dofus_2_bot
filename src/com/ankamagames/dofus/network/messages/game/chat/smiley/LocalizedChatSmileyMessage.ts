import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ChatSmileyMessage } from "./ChatSmileyMessage";

export class LocalizedChatSmileyMessage extends ChatSmileyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8626;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public cellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LocalizedChatSmileyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return LocalizedChatSmileyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return LocalizedChatSmileyMessage.endpointServer;
    }

    public initLocalizedChatSmileyMessage(entityId: number = 0, smileyId: number = 0, accountId: number = 0, cellId: number = 0): LocalizedChatSmileyMessage
    {
        super.initChatSmileyMessage(entityId,smileyId,accountId);
        this.cellId = cellId;
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
        this.serializeAs_LocalizedChatSmileyMessage(output);
    }

    public serializeAs_LocalizedChatSmileyMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatSmileyMessage(output);
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeVarShort(this.cellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LocalizedChatSmileyMessage(input);
    }

    private deserializeAs_LocalizedChatSmileyMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._cellIdFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of LocalizedChatSmileyMessage.cellId.");
        }
    }

}