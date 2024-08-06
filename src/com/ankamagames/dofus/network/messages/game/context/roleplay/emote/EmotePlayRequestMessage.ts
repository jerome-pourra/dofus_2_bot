import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EmotePlayRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7754;

	public emoteId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EmotePlayRequestMessage.protocolId;
    }

    public initEmotePlayRequestMessage(emoteId: number = 0): EmotePlayRequestMessage
    {
        this.emoteId = emoteId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_EmotePlayRequestMessage(output);
    }

    public serializeAs_EmotePlayRequestMessage(output: ICustomDataOutput)
    {
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
        }
        output.writeShort(this.emoteId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EmotePlayRequestMessage(input);
    }

    private deserializeAs_EmotePlayRequestMessage(input: ICustomDataInput)
    {
        this._emoteIdFunc(input);
    }

    private _emoteIdFunc(input: ICustomDataInput)
    {
        this.emoteId = input.readUnsignedShort();
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element of EmotePlayRequestMessage.emoteId.");
        }
    }

}