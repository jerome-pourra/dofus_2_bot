import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntShowLegendaryUIMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8368;

	public availableLegendaryIds: Array<number>;

    public constructor()
    {
        super();
        this.availableLegendaryIds = Array<number>();
    }

    public getMessageId()
    {
        return TreasureHuntShowLegendaryUIMessage.protocolId;
    }

    public initTreasureHuntShowLegendaryUIMessage(availableLegendaryIds: Array<number> = null): TreasureHuntShowLegendaryUIMessage
    {
        this.availableLegendaryIds = availableLegendaryIds;
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
        this.serializeAs_TreasureHuntShowLegendaryUIMessage(output);
    }

    public serializeAs_TreasureHuntShowLegendaryUIMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.availableLegendaryIds.length);
        for(var _i1: number = 0; _i1 < this.availableLegendaryIds.length; _i1++)
        {
            if(this.availableLegendaryIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.availableLegendaryIds[_i1] + ") on element 1 (starting at 1) of availableLegendaryIds.");
            }
            output.writeVarShort(this.availableLegendaryIds[_i1]);
        }
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