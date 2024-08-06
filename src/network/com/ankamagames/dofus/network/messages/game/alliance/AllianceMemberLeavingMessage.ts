import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceMemberLeavingMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 626;

	public kicked: boolean = false;
	public memberId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceMemberLeavingMessage.protocolId;
    }

    public initAllianceMemberLeavingMessage(kicked: boolean = false, memberId: number = 0): AllianceMemberLeavingMessage
    {
        this.kicked = kicked;
        this.memberId = memberId;
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
        this.serializeAs_AllianceMemberLeavingMessage(output);
    }

    public serializeAs_AllianceMemberLeavingMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.kicked);
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMemberLeavingMessage(input);
    }

    private deserializeAs_AllianceMemberLeavingMessage(input: ICustomDataInput)
    {
        this._kickedFunc(input);
        this._memberIdFunc(input);
    }

    private _kickedFunc(input: ICustomDataInput)
    {
        this.kicked = input.readBoolean();
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of AllianceMemberLeavingMessage.memberId.");
        }
    }

}