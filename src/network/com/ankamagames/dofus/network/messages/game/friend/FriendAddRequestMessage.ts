import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendAddRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5713;

	public target: AbstractPlayerSearchInformation;

    public constructor()
    {
        super();
        this.target = new AbstractPlayerSearchInformation();
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
        this.deserializeAs_FriendAddRequestMessage(input);
    }

    private deserializeAs_FriendAddRequestMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.target = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id1);
        this.target.deserialize(input);
    }

}