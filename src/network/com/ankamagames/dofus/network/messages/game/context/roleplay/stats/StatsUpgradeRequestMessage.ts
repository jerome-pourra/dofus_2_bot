import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class StatsUpgradeRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5002;

	public useAdditionnal: boolean = false;
	public statId: number = 11;
	public boostPoint: number = 0;

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
        this.deserializeAs_StatsUpgradeRequestMessage(input);
    }

    private deserializeAs_StatsUpgradeRequestMessage(input: ICustomDataInput)
    {
        this._useAdditionnalFunc(input);
        this._statIdFunc(input);
        this._boostPointFunc(input);
    }

    private _useAdditionnalFunc(input: ICustomDataInput)
    {
        this.useAdditionnal = input.readBoolean();
    }

    private _statIdFunc(input: ICustomDataInput)
    {
        this.statId = input.readByte();
        if(this.statId < 0)
        {
            throw new Error("Forbidden value (" + this.statId + ") on element of StatsUpgradeRequestMessage.statId.");
        }
    }

    private _boostPointFunc(input: ICustomDataInput)
    {
        this.boostPoint = input.readVarUhShort();
        if(this.boostPoint < 0)
        {
            throw new Error("Forbidden value (" + this.boostPoint + ") on element of StatsUpgradeRequestMessage.boostPoint.");
        }
    }

}