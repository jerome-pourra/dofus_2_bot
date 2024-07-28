import { FightExternalInformations } from "./../../../../types/game/context/fight/FightExternalInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapRunningFightListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8225;

	public fights: Array<FightExternalInformations>;

    public constructor()
    {
        super();
        this.fights = Array<FightExternalInformations>();
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