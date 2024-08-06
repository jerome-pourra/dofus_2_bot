import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportBuddiesRequestedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2454;

	public dungeonId: number = 0;
	public inviterId: number = 0;
	public invalidBuddiesIds: Array<number>;

    public constructor()
    {
        super();
        this.invalidBuddiesIds = Array<number>();
    }

    public getMessageId()
    {
        return TeleportBuddiesRequestedMessage.protocolId;
    }

    public initTeleportBuddiesRequestedMessage(dungeonId: number = 0, inviterId: number = 0, invalidBuddiesIds: Array<number> = null): TeleportBuddiesRequestedMessage
    {
        this.dungeonId = dungeonId;
        this.inviterId = inviterId;
        this.invalidBuddiesIds = invalidBuddiesIds;
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
        this.serializeAs_TeleportBuddiesRequestedMessage(output);
    }

    public serializeAs_TeleportBuddiesRequestedMessage(output: ICustomDataOutput)
    {
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
        if(this.inviterId < 0 || this.inviterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.inviterId + ") on element inviterId.");
        }
        output.writeVarLong(this.inviterId);
        output.writeShort(this.invalidBuddiesIds.length);
        for(var _i3: number = 0; _i3 < this.invalidBuddiesIds.length; _i3++)
        {
            if(this.invalidBuddiesIds[_i3] < 0 || this.invalidBuddiesIds[_i3] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.invalidBuddiesIds[_i3] + ") on element 3 (starting at 1) of invalidBuddiesIds.");
            }
            output.writeVarLong(this.invalidBuddiesIds[_i3]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportBuddiesRequestedMessage(input);
    }

    private deserializeAs_TeleportBuddiesRequestedMessage(input: ICustomDataInput)
    {
        let _val3: number = NaN;
        this._dungeonIdFunc(input);
        this._inviterIdFunc(input);
        let _invalidBuddiesIdsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _invalidBuddiesIdsLen; _i3++)
        {
            _val3 = input.readVarUhLong();
            if(_val3 < 0 || _val3 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of invalidBuddiesIds.");
            }
            this.invalidBuddiesIds.push(_val3);
        }
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportBuddiesRequestedMessage.dungeonId.");
        }
    }

    private _inviterIdFunc(input: ICustomDataInput)
    {
        this.inviterId = input.readVarUhLong();
        if(this.inviterId < 0 || this.inviterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.inviterId + ") on element of TeleportBuddiesRequestedMessage.inviterId.");
        }
    }

}