import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class AnomalyStateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9316;

	public subAreaId: number = 0;
	public open: boolean = false;
	public closingTime: number = 0;

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
        this.deserializeAs_AnomalyStateMessage(input);
    }

    private deserializeAs_AnomalyStateMessage(input: ICustomDataInput)
    {
        this._subAreaIdFunc(input);
        this._openFunc(input);
        this._closingTimeFunc(input);
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of AnomalyStateMessage.subAreaId.");
        }
    }

    private _openFunc(input: ICustomDataInput)
    {
        this.open = input.readBoolean();
    }

    private _closingTimeFunc(input: ICustomDataInput)
    {
        this.closingTime = input.readVarUhLong();
        if(this.closingTime < 0 || this.closingTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.closingTime + ") on element of AnomalyStateMessage.closingTime.");
        }
    }

}