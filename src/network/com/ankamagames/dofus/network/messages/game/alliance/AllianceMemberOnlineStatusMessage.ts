import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceMemberOnlineStatusMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5529;

	public memberId: number = 0;
	public online: boolean = false;

    public constructor()
    {
        super();
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
        this.deserializeAs_AllianceMemberOnlineStatusMessage(input);
    }

    private deserializeAs_AllianceMemberOnlineStatusMessage(input: ICustomDataInput)
    {
        this._memberIdFunc(input);
        this._onlineFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of AllianceMemberOnlineStatusMessage.memberId.");
        }
    }

    private _onlineFunc(input: ICustomDataInput)
    {
        this.online = input.readBoolean();
    }

}