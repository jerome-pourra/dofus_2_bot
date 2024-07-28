import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class StatsUpgradeResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3065;

	public result: number = 0;
	public nbCharacBoost: number = 0;

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
        this.deserializeAs_StatsUpgradeResultMessage(input);
    }

    private deserializeAs_StatsUpgradeResultMessage(input: ICustomDataInput)
    {
        this._resultFunc(input);
        this._nbCharacBoostFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
    }

    private _nbCharacBoostFunc(input: ICustomDataInput)
    {
        this.nbCharacBoost = input.readVarUhShort();
        if(this.nbCharacBoost < 0)
        {
            throw new Error("Forbidden value (" + this.nbCharacBoost + ") on element of StatsUpgradeResultMessage.nbCharacBoost.");
        }
    }

}