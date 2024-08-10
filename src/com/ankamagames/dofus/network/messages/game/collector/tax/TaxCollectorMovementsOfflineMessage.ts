import { TaxCollectorMovement } from "./../../../../types/game/collector/tax/TaxCollectorMovement";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorMovementsOfflineMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4833;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public movements: Array<TaxCollectorMovement>;

    public constructor()
    {
        super();
        this.movements = Array<TaxCollectorMovement>();
    }

    public getMessageId()
    {
        return TaxCollectorMovementsOfflineMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorMovementsOfflineMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorMovementsOfflineMessage.endpointServer;
    }

    public initTaxCollectorMovementsOfflineMessage(movements: Array<TaxCollectorMovement> = null): TaxCollectorMovementsOfflineMessage
    {
        this.movements = movements;
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
        this.serializeAs_TaxCollectorMovementsOfflineMessage(output);
    }

    public serializeAs_TaxCollectorMovementsOfflineMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.movements.length);
        for(var _i1: number = 0; _i1 < this.movements.length; _i1++)
        {
            (this.movements[_i1] as TaxCollectorMovement).serializeAs_TaxCollectorMovement(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorMovementsOfflineMessage(input);
    }

    private deserializeAs_TaxCollectorMovementsOfflineMessage(input: ICustomDataInput)
    {
        let _item1: TaxCollectorMovement;
        let _movementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _movementsLen; _i1++)
        {
            _item1 = new TaxCollectorMovement();
            _item1.deserialize(input);
            this.movements.push(_item1);
        }
    }

}