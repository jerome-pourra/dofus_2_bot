import { AccountHouseInformations } from "./../../../../../types/game/house/AccountHouseInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class AccountHouseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7345;

	public houses: Array<AccountHouseInformations>;

    public constructor()
    {
        super();
        this.houses = Array<AccountHouseInformations>();
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
        this.deserializeAs_AccountHouseMessage(input);
    }

    private deserializeAs_AccountHouseMessage(input: ICustomDataInput)
    {
        let _item1: AccountHouseInformations;
        let _housesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _housesLen; _i1++)
        {
            _item1 = new AccountHouseInformations();
            _item1.deserialize(input);
            this.houses.push(_item1);
        }
    }

}