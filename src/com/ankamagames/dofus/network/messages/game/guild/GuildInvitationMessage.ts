import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInvitationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8788;

	public targetId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildInvitationMessage.protocolId;
    }

    public initGuildInvitationMessage(targetId: number = 0): GuildInvitationMessage
    {
        this.targetId = targetId;
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
        this.serializeAs_GuildInvitationMessage(output);
    }

    public serializeAs_GuildInvitationMessage(output: ICustomDataOutput)
    {
        if(this.targetId < 0 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeVarLong(this.targetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildInvitationMessage(input);
    }

    private deserializeAs_GuildInvitationMessage(input: ICustomDataInput)
    {
        this._targetIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readVarUhLong();
        if(this.targetId < 0 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GuildInvitationMessage.targetId.");
        }
    }

}