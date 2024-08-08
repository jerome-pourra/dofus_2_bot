import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildUpdateNoteMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7051;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public memberId: number = 0;
	public note: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildUpdateNoteMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildUpdateNoteMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildUpdateNoteMessage.endpointServer;
    }

    public initGuildUpdateNoteMessage(memberId: number = 0, note: string = ""): GuildUpdateNoteMessage
    {
        this.memberId = memberId;
        this.note = note;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildUpdateNoteMessage(output);
    }

    public serializeAs_GuildUpdateNoteMessage(output: ICustomDataOutput)
    {
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
        output.writeUTF(this.note);
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