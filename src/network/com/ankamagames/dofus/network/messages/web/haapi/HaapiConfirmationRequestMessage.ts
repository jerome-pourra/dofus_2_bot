import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiConfirmationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7674;

	public kamas: number = 0;
	public ogrines: number = 0;
	public rate: number = 0;
	public action: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiConfirmationRequestMessage.protocolId;
    }

    public initHaapiConfirmationRequestMessage(kamas: number = 0, ogrines: number = 0, rate: number = 0, action: number = 0): HaapiConfirmationRequestMessage
    {
        this.kamas = kamas;
        this.ogrines = ogrines;
        this.rate = rate;
        this.action = action;
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
        this.serializeAs_HaapiConfirmationRequestMessage(output);
    }

    public serializeAs_HaapiConfirmationRequestMessage(output: ICustomDataOutput)
    {
        if(this.kamas < 0 || this.kamas > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamas + ") on element kamas.");
        }
        output.writeVarLong(this.kamas);
        if(this.ogrines < 0 || this.ogrines > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.ogrines + ") on element ogrines.");
        }
        output.writeVarLong(this.ogrines);
        if(this.rate < 0)
        {
            throw new Error("Forbidden value (" + this.rate + ") on element rate.");
        }
        output.writeVarShort(this.rate);
        output.writeByte(this.action);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiConfirmationRequestMessage(input);
    }

    private deserializeAs_HaapiConfirmationRequestMessage(input: ICustomDataInput)
    {
        this._kamasFunc(input);
        this._ogrinesFunc(input);
        this._rateFunc(input);
        this._actionFunc(input);
    }

    private _kamasFunc(input: ICustomDataInput)
    {
        this.kamas = input.readVarUhLong();
        if(this.kamas < 0 || this.kamas > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamas + ") on element of HaapiConfirmationRequestMessage.kamas.");
        }
    }

    private _ogrinesFunc(input: ICustomDataInput)
    {
        this.ogrines = input.readVarUhLong();
        if(this.ogrines < 0 || this.ogrines > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.ogrines + ") on element of HaapiConfirmationRequestMessage.ogrines.");
        }
    }

    private _rateFunc(input: ICustomDataInput)
    {
        this.rate = input.readVarUhShort();
        if(this.rate < 0)
        {
            throw new Error("Forbidden value (" + this.rate + ") on element of HaapiConfirmationRequestMessage.rate.");
        }
    }

    private _actionFunc(input: ICustomDataInput)
    {
        this.action = input.readByte();
        if(this.action < 0)
        {
            throw new Error("Forbidden value (" + this.action + ") on element of HaapiConfirmationRequestMessage.action.");
        }
    }

}