import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportToBuddyAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3588;

	public dungeonId: number = 0;
	public buddyId: number = 0;
	public accept: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportToBuddyAnswerMessage.protocolId;
    }

    public initTeleportToBuddyAnswerMessage(dungeonId: number = 0, buddyId: number = 0, accept: boolean = false): TeleportToBuddyAnswerMessage
    {
        this.dungeonId = dungeonId;
        this.buddyId = buddyId;
        this.accept = accept;
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
        this.serializeAs_TeleportToBuddyAnswerMessage(output);
    }

    public serializeAs_TeleportToBuddyAnswerMessage(output: ICustomDataOutput)
    {
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
        if(this.buddyId < 0 || this.buddyId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.buddyId + ") on element buddyId.");
        }
        output.writeVarLong(this.buddyId);
        output.writeBoolean(this.accept);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportToBuddyAnswerMessage(input);
    }

    private deserializeAs_TeleportToBuddyAnswerMessage(input: ICustomDataInput)
    {
        this._dungeonIdFunc(input);
        this._buddyIdFunc(input);
        this._acceptFunc(input);
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportToBuddyAnswerMessage.dungeonId.");
        }
    }

    private _buddyIdFunc(input: ICustomDataInput)
    {
        this.buddyId = input.readVarUhLong();
        if(this.buddyId < 0 || this.buddyId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.buddyId + ") on element of TeleportToBuddyAnswerMessage.buddyId.");
        }
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}