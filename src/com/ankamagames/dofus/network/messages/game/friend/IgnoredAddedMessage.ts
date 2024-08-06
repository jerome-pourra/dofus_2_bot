import { IgnoredInformations } from "./../../../types/game/friend/IgnoredInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class IgnoredAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3797;

	public ignoreAdded: IgnoredInformations;
	public session: boolean = false;

    public constructor()
    {
        super();
        this.ignoreAdded = new IgnoredInformations();
    }

    public getMessageId()
    {
        return IgnoredAddedMessage.protocolId;
    }

    public initIgnoredAddedMessage(ignoreAdded: IgnoredInformations = null, session: boolean = false): IgnoredAddedMessage
    {
        this.ignoreAdded = ignoreAdded;
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
        this.serializeAs_IgnoredAddedMessage(output);
    }

    public serializeAs_IgnoredAddedMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.ignoreAdded.getTypeId());
        this.ignoreAdded.serialize(output);
        output.writeBoolean(this.session);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IgnoredAddedMessage(input);
    }

    private deserializeAs_IgnoredAddedMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.ignoreAdded = ProtocolTypeManager.getInstance(IgnoredInformations,_id1);
        this.ignoreAdded.deserialize(input);
        this._sessionFunc(input);
    }

    private _sessionFunc(input: ICustomDataInput)
    {
        this.session = input.readBoolean();
    }

}