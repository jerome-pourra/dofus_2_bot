import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntLegendaryRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7183;

	public legendaryId: number = 0;

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
        this.deserializeAs_TreasureHuntLegendaryRequestMessage(input);
    }

    private deserializeAs_TreasureHuntLegendaryRequestMessage(input: ICustomDataInput)
    {
        this._legendaryIdFunc(input);
    }

    private _legendaryIdFunc(input: ICustomDataInput)
    {
        this.legendaryId = input.readVarUhShort();
        if(this.legendaryId < 0)
        {
            throw new Error("Forbidden value (" + this.legendaryId + ") on element of TreasureHuntLegendaryRequestMessage.legendaryId.");
        }
    }

}