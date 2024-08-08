import { AnomalySubareaInformation } from "./../../../../types/game/context/roleplay/AnomalySubareaInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AnomalySubareaInformationResponseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9235;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public subareas: Array<AnomalySubareaInformation>;

    public constructor()
    {
        super();
        this.subareas = Array<AnomalySubareaInformation>();
    }

    public getMessageId()
    {
        return AnomalySubareaInformationResponseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AnomalySubareaInformationResponseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AnomalySubareaInformationResponseMessage.endpointServer;
    }

    public initAnomalySubareaInformationResponseMessage(subareas: Array<AnomalySubareaInformation> = null): AnomalySubareaInformationResponseMessage
    {
        this.subareas = subareas;
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
        this.serializeAs_AnomalySubareaInformationResponseMessage(output);
    }

    public serializeAs_AnomalySubareaInformationResponseMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.subareas.length);
        for(var _i1: number = 0; _i1 < this.subareas.length; _i1++)
        {
            (this.subareas[_i1] as AnomalySubareaInformation).serializeAs_AnomalySubareaInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AnomalySubareaInformationResponseMessage(input);
    }

    private deserializeAs_AnomalySubareaInformationResponseMessage(input: ICustomDataInput)
    {
        let _item1: AnomalySubareaInformation;
        let _subareasLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _subareasLen; _i1++)
        {
            _item1 = new AnomalySubareaInformation();
            _item1.deserialize(input);
            this.subareas.push(_item1);
        }
    }

}