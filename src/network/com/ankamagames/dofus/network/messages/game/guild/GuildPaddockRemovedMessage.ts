import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildPaddockRemovedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1415;

	public paddockId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildPaddockRemovedMessage.protocolId;
    }

    public initGuildPaddockRemovedMessage(paddockId: number = 0): GuildPaddockRemovedMessage
    {
        this.paddockId = paddockId;
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
        this.serializeAs_GuildPaddockRemovedMessage(output);
    }

    public serializeAs_GuildPaddockRemovedMessage(output: ICustomDataOutput)
    {
        if(this.paddockId < 0 || this.paddockId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.paddockId + ") on element paddockId.");
        }
        output.writeDouble(this.paddockId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPaddockRemovedMessage(input);
    }

    private deserializeAs_GuildPaddockRemovedMessage(input: ICustomDataInput)
    {
        this._paddockIdFunc(input);
    }

    private _paddockIdFunc(input: ICustomDataInput)
    {
        this.paddockId = input.readDouble();
        if(this.paddockId < 0 || this.paddockId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.paddockId + ") on element of GuildPaddockRemovedMessage.paddockId.");
        }
    }

}