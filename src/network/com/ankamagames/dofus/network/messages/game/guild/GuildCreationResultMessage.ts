import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildCreationResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4018;

	public result: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildCreationResultMessage.protocolId;
    }

    public initGuildCreationResultMessage(result: number = 0): GuildCreationResultMessage
    {
        this.result = result;
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
        this.serializeAs_GuildCreationResultMessage(output);
    }

    public serializeAs_GuildCreationResultMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.result);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildCreationResultMessage(input);
    }

    private deserializeAs_GuildCreationResultMessage(input: ICustomDataInput)
    {
        this._resultFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of GuildCreationResultMessage.result.");
        }
    }

}