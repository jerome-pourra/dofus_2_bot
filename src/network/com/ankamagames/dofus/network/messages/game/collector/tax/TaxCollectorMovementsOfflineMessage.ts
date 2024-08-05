import { TaxCollectorMovement } from "./../../../../types/game/collector/tax/TaxCollectorMovement";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorMovementsOfflineMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4833;

	public movements: Array<TaxCollectorMovement>;

    public constructor()
    {
        super();
        this.movements = Array<TaxCollectorMovement>();
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