import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DisplayNumericalValuePaddockMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4632;

	public rideId: number = 0;
	public value: number = 0;
	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DisplayNumericalValuePaddockMessage.protocolId;
    }

    public initDisplayNumericalValuePaddockMessage(rideId: number = 0, value: number = 0, type: number = 0): DisplayNumericalValuePaddockMessage
    {
        this.rideId = rideId;
        this.value = value;
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
        this.serializeAs_DisplayNumericalValuePaddockMessage(output);
    }

    public serializeAs_DisplayNumericalValuePaddockMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.rideId);
        output.writeInt(this.value);
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DisplayNumericalValuePaddockMessage(input);
    }

    private deserializeAs_DisplayNumericalValuePaddockMessage(input: ICustomDataInput)
    {
        this._rideIdFunc(input);
        this._valueFunc(input);
        this._typeFunc(input);
    }

    private _rideIdFunc(input: ICustomDataInput)
    {
        this.rideId = input.readInt();
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readInt();
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of DisplayNumericalValuePaddockMessage.type.");
        }
    }

}