import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AcquaintanceSearchErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2291;

	public reason: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AcquaintanceSearchErrorMessage.protocolId;
    }

    public initAcquaintanceSearchErrorMessage(reason: number = 0): AcquaintanceSearchErrorMessage
    {
        this.reason = reason;
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
        this.serializeAs_AcquaintanceSearchErrorMessage(output);
    }

    public serializeAs_AcquaintanceSearchErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AcquaintanceSearchErrorMessage(input);
    }

    private deserializeAs_AcquaintanceSearchErrorMessage(input: ICustomDataInput)
    {
        this._reasonFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of AcquaintanceSearchErrorMessage.reason.");
        }
    }

}