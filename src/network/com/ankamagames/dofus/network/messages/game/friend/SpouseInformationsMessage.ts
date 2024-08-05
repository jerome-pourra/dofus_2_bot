import { FriendSpouseInformations } from "./../../../types/game/friend/FriendSpouseInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SpouseInformationsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7779;

	public spouse: FriendSpouseInformations;

    public constructor()
    {
        super();
        this.spouse = new FriendSpouseInformations();
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
        this.deserializeAs_SpouseInformationsMessage(input);
    }

    private deserializeAs_SpouseInformationsMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.spouse = ProtocolTypeManager.getInstance(FriendSpouseInformations,_id1);
        this.spouse.deserialize(input);
    }

}