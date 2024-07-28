import { AcquaintanceInformation } from "./../../../types/game/friend/AcquaintanceInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AcquaintanceAddedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2270;

	public acquaintanceAdded: AcquaintanceInformation;

    public constructor()
    {
        super();
        this.acquaintanceAdded = new AcquaintanceInformation();
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
        this.deserializeAs_AcquaintanceAddedMessage(input);
    }

    private deserializeAs_AcquaintanceAddedMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.acquaintanceAdded = ProtocolTypeManager.getInstance(AcquaintanceInformation,_id1);
        this.acquaintanceAdded.deserialize(input);
    }

}