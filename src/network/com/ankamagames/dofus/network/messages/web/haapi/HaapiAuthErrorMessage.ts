import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiAuthErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 349;

	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiAuthErrorMessage.protocolId;
    }

    public initHaapiAuthErrorMessage(type: number = 0): HaapiAuthErrorMessage
    {
        this.type = type;
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
        this.serializeAs_HaapiAuthErrorMessage(output);
    }

    public serializeAs_HaapiAuthErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiAuthErrorMessage(input);
    }

    private deserializeAs_HaapiAuthErrorMessage(input: ICustomDataInput)
    {
        this._typeFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of HaapiAuthErrorMessage.type.");
        }
    }

}