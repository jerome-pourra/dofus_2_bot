import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EmotePlayAbstractMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8135;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public emoteId: number = 0;
	public emoteStartTime: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EmotePlayAbstractMessage.protocolId;
    }

    public isEndpointClient()
    {
        return EmotePlayAbstractMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return EmotePlayAbstractMessage.endpointServer;
    }

    public initEmotePlayAbstractMessage(emoteId: number = 0, emoteStartTime: number = 0): EmotePlayAbstractMessage
    {
        this.emoteId = emoteId;
        this.emoteStartTime = emoteStartTime;
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
        this.serializeAs_EmotePlayAbstractMessage(output);
    }

    public serializeAs_EmotePlayAbstractMessage(output: ICustomDataOutput)
    {
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
        }
        output.writeShort(this.emoteId);
        if(this.emoteStartTime < -9007199254740992 || this.emoteStartTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.emoteStartTime + ") on element emoteStartTime.");
        }
        output.writeDouble(this.emoteStartTime);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EmotePlayAbstractMessage(input);
    }

    private deserializeAs_EmotePlayAbstractMessage(input: ICustomDataInput)
    {
        this._emoteIdFunc(input);
        this._emoteStartTimeFunc(input);
    }

    private _emoteIdFunc(input: ICustomDataInput)
    {
        this.emoteId = input.readUnsignedShort();
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element of EmotePlayAbstractMessage.emoteId.");
        }
    }

    private _emoteStartTimeFunc(input: ICustomDataInput)
    {
        this.emoteStartTime = input.readDouble();
        if(this.emoteStartTime < -9007199254740992 || this.emoteStartTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.emoteStartTime + ") on element of EmotePlayAbstractMessage.emoteStartTime.");
        }
    }

}