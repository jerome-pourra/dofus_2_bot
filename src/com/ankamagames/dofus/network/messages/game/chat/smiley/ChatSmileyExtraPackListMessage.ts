import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChatSmileyExtraPackListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3973;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public packIds: Array<number>;

    public constructor()
    {
        super();
        this.packIds = Array<number>();
    }

    public getMessageId()
    {
        return ChatSmileyExtraPackListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatSmileyExtraPackListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatSmileyExtraPackListMessage.endpointServer;
    }

    public initChatSmileyExtraPackListMessage(packIds: Array<number> = null): ChatSmileyExtraPackListMessage
    {
        this.packIds = packIds;
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
        this.serializeAs_ChatSmileyExtraPackListMessage(output);
    }

    public serializeAs_ChatSmileyExtraPackListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.packIds.length);
        for(var _i1: number = 0; _i1 < this.packIds.length; _i1++)
        {
            if(this.packIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.packIds[_i1] + ") on element 1 (starting at 1) of packIds.");
            }
            output.writeByte(this.packIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatSmileyExtraPackListMessage(input);
    }

    private deserializeAs_ChatSmileyExtraPackListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _packIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _packIdsLen; _i1++)
        {
            _val1 = input.readByte();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of packIds.");
            }
            this.packIds.push(_val1);
        }
    }

}