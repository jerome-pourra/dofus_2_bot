import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EmoteListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6038;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public emoteIds: Array<number>;

    public constructor()
    {
        super();
        this.emoteIds = Array<number>();
    }

    public getMessageId()
    {
        return EmoteListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return EmoteListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return EmoteListMessage.endpointServer;
    }

    public initEmoteListMessage(emoteIds: Array<number> = null): EmoteListMessage
    {
        this.emoteIds = emoteIds;
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
        this.serializeAs_EmoteListMessage(output);
    }

    public serializeAs_EmoteListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.emoteIds.length);
        for(var _i1: number = 0; _i1 < this.emoteIds.length; _i1++)
        {
            if(this.emoteIds[_i1] < 0 || this.emoteIds[_i1] > 65535)
            {
                throw new Error("Forbidden value (" + this.emoteIds[_i1] + ") on element 1 (starting at 1) of emoteIds.");
            }
            output.writeShort(this.emoteIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EmoteListMessage(input);
    }

    private deserializeAs_EmoteListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _emoteIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _emoteIdsLen; _i1++)
        {
            _val1 = input.readUnsignedShort();
            if(_val1 < 0 || _val1 > 65535)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of emoteIds.");
            }
            this.emoteIds.push(_val1);
        }
    }

}