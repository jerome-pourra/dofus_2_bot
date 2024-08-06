import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SetEnableAVARequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6858;

	public enable: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SetEnableAVARequestMessage.protocolId;
    }

    public initSetEnableAVARequestMessage(enable: boolean = false): SetEnableAVARequestMessage
    {
        this.enable = enable;
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
        this.serializeAs_SetEnableAVARequestMessage(output);
    }

    public serializeAs_SetEnableAVARequestMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.enable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SetEnableAVARequestMessage(input);
    }

    private deserializeAs_SetEnableAVARequestMessage(input: ICustomDataInput)
    {
        this._enableFunc(input);
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readBoolean();
    }

}