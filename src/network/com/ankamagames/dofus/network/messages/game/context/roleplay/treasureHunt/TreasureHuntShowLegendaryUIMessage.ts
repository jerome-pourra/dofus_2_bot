import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntShowLegendaryUIMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8368;

	public availableLegendaryIds: Array<number>;

    public constructor()
    {
        super();
        this.availableLegendaryIds = Array<number>();
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
        this.deserializeAs_TreasureHuntShowLegendaryUIMessage(input);
    }

    private deserializeAs_TreasureHuntShowLegendaryUIMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _availableLegendaryIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _availableLegendaryIdsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of availableLegendaryIds.");
            }
            this.availableLegendaryIds.push(_val1);
        }
    }

}