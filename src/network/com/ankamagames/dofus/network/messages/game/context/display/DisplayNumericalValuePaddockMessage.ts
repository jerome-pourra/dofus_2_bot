import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DisplayNumericalValuePaddockMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4632;

	public rideId: number = 0;
	public value: number = 0;
	public type: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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