import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarRemoveErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4981;

	public error: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ShortcutBarRemoveErrorMessage.protocolId;
    }

    public initShortcutBarRemoveErrorMessage(error: number = 0): ShortcutBarRemoveErrorMessage
    {
        this.error = error;
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
        this.serializeAs_ShortcutBarRemoveErrorMessage(output);
    }

    public serializeAs_ShortcutBarRemoveErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.error);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutBarRemoveErrorMessage(input);
    }

    private deserializeAs_ShortcutBarRemoveErrorMessage(input: ICustomDataInput)
    {
        this._errorFunc(input);
    }

    private _errorFunc(input: ICustomDataInput)
    {
        this.error = input.readByte();
        if(this.error < 0)
        {
            throw new Error("Forbidden value (" + this.error + ") on element of ShortcutBarRemoveErrorMessage.error.");
        }
    }

}