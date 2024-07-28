import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatAbstractClientMessage } from "./ChatAbstractClientMessage";

export class ChatClientPrivateMessage extends ChatAbstractClientMessage
{

	public static readonly protocolId: number = 7053;

	public receiver: AbstractPlayerSearchInformation;

    public constructor()
    {
        super();
        this.receiver = new AbstractPlayerSearchInformation();
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
        this.deserializeAs_ChatClientPrivateMessage(input);
    }

    private deserializeAs_ChatClientPrivateMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.receiver = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id1);
        this.receiver.deserialize(input);
    }

}