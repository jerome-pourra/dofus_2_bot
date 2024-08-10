import { PrismGeolocalizedInformation } from "./../../../types/game/prism/PrismGeolocalizedInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PrismsListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7733;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public prisms: Array<PrismGeolocalizedInformation>;

    public constructor()
    {
        super();
        this.prisms = Array<PrismGeolocalizedInformation>();
    }

    public getMessageId()
    {
        return PrismsListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PrismsListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PrismsListMessage.endpointServer;
    }

    public initPrismsListMessage(prisms: Array<PrismGeolocalizedInformation> = null): PrismsListMessage
    {
        this.prisms = prisms;
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
        this.serializeAs_PrismsListMessage(output);
    }

    public serializeAs_PrismsListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.prisms.length);
        for(var _i1: number = 0; _i1 < this.prisms.length; _i1++)
        {
            output.writeShort((this.prisms[_i1] as PrismGeolocalizedInformation).getTypeId());
            (this.prisms[_i1] as PrismGeolocalizedInformation).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PrismsListMessage(input);
    }

    private deserializeAs_PrismsListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: PrismGeolocalizedInformation;
        let _prismsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _prismsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(PrismGeolocalizedInformation,_id1);
            _item1.deserialize(input);
            this.prisms.push(_item1);
        }
    }

}