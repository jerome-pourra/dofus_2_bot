import { AllianceMemberInfo } from "./../../../types/game/alliance/AllianceMemberInfo";
import { TaxCollectorInformations } from "./../../../types/game/collector/tax/TaxCollectorInformations";
import { PrismGeolocalizedInformation } from "./../../../types/game/prism/PrismGeolocalizedInformation";
import { AllianceFactSheetInformation } from "./../../../types/game/social/AllianceFactSheetInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInsiderInfoMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4562;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public allianceInfos: AllianceFactSheetInformation;
	public members: Array<AllianceMemberInfo>;
	public prisms: Array<PrismGeolocalizedInformation>;
	public taxCollectors: Array<TaxCollectorInformations>;

    public constructor()
    {
        super();
        this.allianceInfos = new AllianceFactSheetInformation();
        this.members = Array<AllianceMemberInfo>();
        this.prisms = Array<PrismGeolocalizedInformation>();
        this.taxCollectors = Array<TaxCollectorInformations>();
    }

    public getMessageId()
    {
        return AllianceInsiderInfoMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceInsiderInfoMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceInsiderInfoMessage.endpointServer;
    }

    public initAllianceInsiderInfoMessage(allianceInfos: AllianceFactSheetInformation = null, members: Array<AllianceMemberInfo> = null, prisms: Array<PrismGeolocalizedInformation> = null, taxCollectors: Array<TaxCollectorInformations> = null): AllianceInsiderInfoMessage
    {
        this.allianceInfos = allianceInfos;
        this.members = members;
        this.prisms = prisms;
        this.taxCollectors = taxCollectors;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceInsiderInfoMessage(output);
    }

    public serializeAs_AllianceInsiderInfoMessage(output: ICustomDataOutput)
    {
        this.allianceInfos.serializeAs_AllianceFactSheetInformation(output);
        output.writeShort(this.members.length);
        for(var _i2: number = 0; _i2 < this.members.length; _i2++)
        {
            (this.members[_i2] as AllianceMemberInfo).serializeAs_AllianceMemberInfo(output);
        }
        output.writeShort(this.prisms.length);
        for(var _i3: number = 0; _i3 < this.prisms.length; _i3++)
        {
            output.writeShort((this.prisms[_i3] as PrismGeolocalizedInformation).getTypeId());
            (this.prisms[_i3] as PrismGeolocalizedInformation).serialize(output);
        }
        output.writeShort(this.taxCollectors.length);
        for(var _i4: number = 0; _i4 < this.taxCollectors.length; _i4++)
        {
            (this.taxCollectors[_i4] as TaxCollectorInformations).serializeAs_TaxCollectorInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceInsiderInfoMessage(input);
    }

    private deserializeAs_AllianceInsiderInfoMessage(input: ICustomDataInput)
    {
        let _item2: AllianceMemberInfo;
        let _id3: number = 0;
        let _item3: PrismGeolocalizedInformation;
        let _item4: TaxCollectorInformations;
        this.allianceInfos = new AllianceFactSheetInformation();
        this.allianceInfos.deserialize(input);
        let _membersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _membersLen; _i2++)
        {
            _item2 = new AllianceMemberInfo();
            _item2.deserialize(input);
            this.members.push(_item2);
        }
        let _prismsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _prismsLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(PrismGeolocalizedInformation,_id3);
            _item3.deserialize(input);
            this.prisms.push(_item3);
        }
        let _taxCollectorsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _taxCollectorsLen; _i4++)
        {
            _item4 = new TaxCollectorInformations();
            _item4.deserialize(input);
            this.taxCollectors.push(_item4);
        }
    }

}