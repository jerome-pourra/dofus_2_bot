import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildUpdateNoteMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7051;

	public memberId: number = 0;
	public note: string = "";

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
        this.deserializeAs_GuildUpdateNoteMessage(input);
    }

    private deserializeAs_GuildUpdateNoteMessage(input: ICustomDataInput)
    {
        this._memberIdFunc(input);
        this._noteFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of GuildUpdateNoteMessage.memberId.");
        }
    }

    private _noteFunc(input: ICustomDataInput)
    {
        this.note = input.readUTF();
    }

}