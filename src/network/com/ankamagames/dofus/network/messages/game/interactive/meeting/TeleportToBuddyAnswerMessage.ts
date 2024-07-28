import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportToBuddyAnswerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3588;

	public dungeonId: number = 0;
	public buddyId: number = 0;
	public accept: boolean = false;

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