import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextCreateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1595;

	public context: number = 1;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameContextCreateMessage.protocolId;
    }

    public initGameContextCreateMessage(context: number = 1): GameContextCreateMessage
    {
        this.context = context;
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
        this.serializeAs_GameContextCreateMessage(output);
    }

    public serializeAs_GameContextCreateMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.context);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextCreateMessage(input);
    }

    private deserializeAs_GameContextCreateMessage(input: ICustomDataInput)
    {
        this._contextFunc(input);
    }

    private _contextFunc(input: ICustomDataInput)
    {
        this.context = input.readByte();
        if(this.context < 0)
        {
            throw new Error("Forbidden value (" + this.context + ") on element of GameContextCreateMessage.context.");
        }
    }

}