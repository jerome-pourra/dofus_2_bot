import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportToBuddyOfferMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5491;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public dungeonId: number = 0;
	public buddyId: number = 0;
	public timeLeft: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportToBuddyOfferMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TeleportToBuddyOfferMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TeleportToBuddyOfferMessage.endpointServer;
    }

    public initTeleportToBuddyOfferMessage(dungeonId: number = 0, buddyId: number = 0, timeLeft: number = 0): TeleportToBuddyOfferMessage
    {
        this.dungeonId = dungeonId;
        this.buddyId = buddyId;
        this.timeLeft = timeLeft;
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
        this.serializeAs_TeleportToBuddyOfferMessage(output);
    }

    public serializeAs_TeleportToBuddyOfferMessage(output: ICustomDataOutput)
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
        if(this.timeLeft < 0)
        {
            throw new Error("Forbidden value (" + this.timeLeft + ") on element timeLeft.");
        }
        output.writeVarInt(this.timeLeft);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportToBuddyOfferMessage(input);
    }

    private deserializeAs_TeleportToBuddyOfferMessage(input: ICustomDataInput)
    {
        this._dungeonIdFunc(input);
        this._buddyIdFunc(input);
        this._timeLeftFunc(input);
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportToBuddyOfferMessage.dungeonId.");
        }
    }

    private _buddyIdFunc(input: ICustomDataInput)
    {
        this.buddyId = input.readVarUhLong();
        if(this.buddyId < 0 || this.buddyId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.buddyId + ") on element of TeleportToBuddyOfferMessage.buddyId.");
        }
    }

    private _timeLeftFunc(input: ICustomDataInput)
    {
        this.timeLeft = input.readVarUhInt();
        if(this.timeLeft < 0)
        {
            throw new Error("Forbidden value (" + this.timeLeft + ") on element of TeleportToBuddyOfferMessage.timeLeft.");
        }
    }

}