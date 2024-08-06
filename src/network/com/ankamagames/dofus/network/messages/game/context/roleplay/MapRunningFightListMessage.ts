import { FightExternalInformations } from "./../../../../types/game/context/fight/FightExternalInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapRunningFightListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8225;

	public fights: Array<FightExternalInformations>;

    public constructor()
    {
        super();
        this.fights = Array<FightExternalInformations>();
    }

    public getMessageId()
    {
        return MapRunningFightListMessage.protocolId;
    }

    public initMapRunningFightListMessage(fights: Array<FightExternalInformations> = null): MapRunningFightListMessage
    {
        this.fights = fights;
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
        this.serializeAs_MapRunningFightListMessage(output);
    }

    public serializeAs_MapRunningFightListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.fights.length);
        for(var _i1: number = 0; _i1 < this.fights.length; _i1++)
        {
            (this.fights[_i1] as FightExternalInformations).serializeAs_FightExternalInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapRunningFightListMessage(input);
    }

    private deserializeAs_MapRunningFightListMessage(input: ICustomDataInput)
    {
        let _item1: FightExternalInformations;
        let _fightsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _fightsLen; _i1++)
        {
            _item1 = new FightExternalInformations();
            _item1.deserialize(input);
            this.fights.push(_item1);
        }
    }

}