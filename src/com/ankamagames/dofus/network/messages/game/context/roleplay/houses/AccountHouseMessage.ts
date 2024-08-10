import { AccountHouseInformations } from "./../../../../../types/game/house/AccountHouseInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class AccountHouseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7345;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public houses: Array<AccountHouseInformations>;

    public constructor()
    {
        super();
        this.houses = Array<AccountHouseInformations>();
    }

    public getMessageId()
    {
        return AccountHouseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AccountHouseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AccountHouseMessage.endpointServer;
    }

    public initAccountHouseMessage(houses: Array<AccountHouseInformations> = null): AccountHouseMessage
    {
        this.houses = houses;
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
        this.serializeAs_AccountHouseMessage(output);
    }

    public serializeAs_AccountHouseMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.houses.length);
        for(var _i1: number = 0; _i1 < this.houses.length; _i1++)
        {
            (this.houses[_i1] as AccountHouseInformations).serializeAs_AccountHouseInformations(output);
        }
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