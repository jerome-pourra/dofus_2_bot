import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EmotePlayErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7853;

	public emoteId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EmotePlayErrorMessage.protocolId;
    }

    public initEmotePlayErrorMessage(emoteId: number = 0): EmotePlayErrorMessage
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
        this.serializeAs_EmotePlayErrorMessage(output);
    }

    public serializeAs_EmotePlayErrorMessage(output: ICustomDataOutput)
    {
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
        }
        output.writeShort(this.emoteId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EmotePlayErrorMessage(input);
    }

    private deserializeAs_EmotePlayErrorMessage(input: ICustomDataInput)
    {
        this._emoteIdFunc(input);
    }

    private _emoteIdFunc(input: ICustomDataInput)
    {
        this.emoteId = input.readUnsignedShort();
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element of EmotePlayErrorMessage.emoteId.");
        }
    }

}