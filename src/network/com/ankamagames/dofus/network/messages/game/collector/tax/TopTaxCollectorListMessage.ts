import { TaxCollectorInformations } from "./../../../../types/game/collector/tax/TaxCollectorInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TopTaxCollectorListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3893;

	public dungeonTaxCollectorsInformation: Array<TaxCollectorInformations>;
	public worldTaxCollectorsInformation: Array<TaxCollectorInformations>;

    public constructor()
    {
        super();
        this.dungeonTaxCollectorsInformation = Array<TaxCollectorInformations>();
        this.worldTaxCollectorsInformation = Array<TaxCollectorInformations>();
    }

    public getMessageId()
    {
        return TopTaxCollectorListMessage.protocolId;
    }

    public initTopTaxCollectorListMessage(dungeonTaxCollectorsInformation: Array<TaxCollectorInformations> = null, worldTaxCollectorsInformation: Array<TaxCollectorInformations> = null): TopTaxCollectorListMessage
    {
        this.dungeonTaxCollectorsInformation = dungeonTaxCollectorsInformation;
        this.worldTaxCollectorsInformation = worldTaxCollectorsInformation;
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
        this.serializeAs_TopTaxCollectorListMessage(output);
    }

    public serializeAs_TopTaxCollectorListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.dungeonTaxCollectorsInformation.length);
        for(var _i1: number = 0; _i1 < this.dungeonTaxCollectorsInformation.length; _i1++)
        {
            output.writeShort((this.dungeonTaxCollectorsInformation[_i1] as TaxCollectorInformations).getTypeId());
            (this.dungeonTaxCollectorsInformation[_i1] as TaxCollectorInformations).serialize(output);
        }
        output.writeShort(this.worldTaxCollectorsInformation.length);
        for(var _i2: number = 0; _i2 < this.worldTaxCollectorsInformation.length; _i2++)
        {
            output.writeShort((this.worldTaxCollectorsInformation[_i2] as TaxCollectorInformations).getTypeId());
            (this.worldTaxCollectorsInformation[_i2] as TaxCollectorInformations).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TopTaxCollectorListMessage(input);
    }

    private deserializeAs_TopTaxCollectorListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: TaxCollectorInformations;
        let _id2: number = 0;
        let _item2: TaxCollectorInformations;
        let _dungeonTaxCollectorsInformationLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _dungeonTaxCollectorsInformationLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(TaxCollectorInformations,_id1);
            _item1.deserialize(input);
            this.dungeonTaxCollectorsInformation.push(_item1);
        }
        let _worldTaxCollectorsInformationLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _worldTaxCollectorsInformationLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(TaxCollectorInformations,_id2);
            _item2.deserialize(input);
            this.worldTaxCollectorsInformation.push(_item2);
        }
    }

}