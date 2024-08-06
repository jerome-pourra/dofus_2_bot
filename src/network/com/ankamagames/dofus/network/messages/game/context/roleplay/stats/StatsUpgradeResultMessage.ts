import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class StatsUpgradeResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3065;

	public result: number = 0;
	public nbCharacBoost: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StatsUpgradeResultMessage.protocolId;
    }

    public initStatsUpgradeResultMessage(result: number = 0, nbCharacBoost: number = 0): StatsUpgradeResultMessage
    {
        this.result = result;
        this.nbCharacBoost = nbCharacBoost;
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
        this.serializeAs_StatsUpgradeResultMessage(output);
    }

    public serializeAs_StatsUpgradeResultMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.result);
        if(this.nbCharacBoost < 0)
        {
            throw new Error("Forbidden value (" + this.nbCharacBoost + ") on element nbCharacBoost.");
        }
        output.writeVarShort(this.nbCharacBoost);
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