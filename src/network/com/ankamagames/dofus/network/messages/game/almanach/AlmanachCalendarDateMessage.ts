import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AlmanachCalendarDateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3938;

	public date: number = 0;

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
        this.deserializeAs_AlmanachCalendarDateMessage(input);
    }

    private deserializeAs_AlmanachCalendarDateMessage(input: ICustomDataInput)
    {
        this._dateFunc(input);
    }

    private _dateFunc(input: ICustomDataInput)
    {
        this.date = input.readInt();
    }

}