import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class IgnoredAddRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5112;

	public target: AbstractPlayerSearchInformation;
	public session: boolean = false;

    public constructor()
    {
        super();
        this.target = new AbstractPlayerSearchInformation();
    }

    public getMessageId()
    {
        return IgnoredAddRequestMessage.protocolId;
    }

    public initIgnoredAddRequestMessage(target: AbstractPlayerSearchInformation = null, session: boolean = false): IgnoredAddRequestMessage
    {
        this.target = target;
        this.session = session;
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
        this.serializeAs_IgnoredAddRequestMessage(output);
    }

    public serializeAs_IgnoredAddRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.target.getTypeId());
        this.target.serialize(output);
        output.writeBoolean(this.session);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IgnoredAddRequestMessage(input);
    }

    private deserializeAs_IgnoredAddRequestMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.target = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id1);
        this.target.deserialize(input);
        this._sessionFunc(input);
    }

    private _sessionFunc(input: ICustomDataInput)
    {
        this.session = input.readBoolean();
    }

}