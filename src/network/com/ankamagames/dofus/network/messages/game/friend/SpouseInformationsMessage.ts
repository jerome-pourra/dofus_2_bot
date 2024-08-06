import { FriendSpouseInformations } from "./../../../types/game/friend/FriendSpouseInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SpouseInformationsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7779;

	public spouse: FriendSpouseInformations;

    public constructor()
    {
        super();
        this.spouse = new FriendSpouseInformations();
    }

    public getMessageId()
    {
        return SpouseInformationsMessage.protocolId;
    }

    public initSpouseInformationsMessage(spouse: FriendSpouseInformations = null): SpouseInformationsMessage
    {
        this.spouse = spouse;
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
        this.serializeAs_SpouseInformationsMessage(output);
    }

    public serializeAs_SpouseInformationsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.spouse.getTypeId());
        this.spouse.serialize(output);
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