import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportToBuddyCloseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4968;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public dungeonId: number = 0;
	public buddyId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportToBuddyCloseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TeleportToBuddyCloseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TeleportToBuddyCloseMessage.endpointServer;
    }

    public initTeleportToBuddyCloseMessage(dungeonId: number = 0, buddyId: number = 0): TeleportToBuddyCloseMessage
    {
        this.dungeonId = dungeonId;
        this.buddyId = buddyId;
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
        this.serializeAs_TeleportToBuddyCloseMessage(output);
    }

    public serializeAs_TeleportToBuddyCloseMessage(output: ICustomDataOutput)
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
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportToBuddyCloseMessage(input);
    }

    private deserializeAs_TeleportToBuddyCloseMessage(input: ICustomDataInput)
    {
        this._dungeonIdFunc(input);
        this._buddyIdFunc(input);
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportToBuddyCloseMessage.dungeonId.");
        }
    }

    private _buddyIdFunc(input: ICustomDataInput)
    {
        this.buddyId = input.readVarUhLong();
        if(this.buddyId < 0 || this.buddyId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.buddyId + ") on element of TeleportToBuddyCloseMessage.buddyId.");
        }
    }

}