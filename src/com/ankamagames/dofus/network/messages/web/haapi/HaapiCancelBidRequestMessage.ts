import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiCancelBidRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6447;

	public id: number = 0;
	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiCancelBidRequestMessage.protocolId;
    }

    public initHaapiCancelBidRequestMessage(id: number = 0, type: number = 0): HaapiCancelBidRequestMessage
    {
        this.id = id;
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
        this.serializeAs_HaapiCancelBidRequestMessage(output);
    }

    public serializeAs_HaapiCancelBidRequestMessage(output: ICustomDataOutput)
    {
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiCancelBidRequestMessage(input);
    }

    private deserializeAs_HaapiCancelBidRequestMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._typeFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of HaapiCancelBidRequestMessage.id.");
        }
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of HaapiCancelBidRequestMessage.type.");
        }
    }

}