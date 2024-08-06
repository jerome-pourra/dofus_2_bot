import { AbstractPartyMemberInFightMessage } from "./../AbstractPartyMemberInFightMessage";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";

export class PartyMemberInBreachFightMessage extends AbstractPartyMemberInFightMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2380;

	public floor: number = 0;
	public room: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyMemberInBreachFightMessage.protocolId;
    }

    public initPartyMemberInBreachFightMessage(partyId: number = 0, reason: number = 0, memberId: number = 0, memberAccountId: number = 0, memberName: string = "", fightId: number = 0, timeBeforeFightStart: number = 0, floor: number = 0, room: number = 0): PartyMemberInBreachFightMessage
    {
        super.initAbstractPartyMemberInFightMessage(partyId,reason,memberId,memberAccountId,memberName,fightId,timeBeforeFightStart);
        this.floor = floor;
        this.room = room;
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
        this.serializeAs_PartyMemberInBreachFightMessage(output);
    }

    public serializeAs_PartyMemberInBreachFightMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMemberInFightMessage(output);
        if(this.floor < 0)
        {
            throw new Error("Forbidden value (" + this.floor + ") on element floor.");
        }
        output.writeVarInt(this.floor);
        if(this.room < 0)
        {
            throw new Error("Forbidden value (" + this.room + ") on element room.");
        }
        output.writeByte(this.room);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyMemberInBreachFightMessage(input);
    }

    private deserializeAs_PartyMemberInBreachFightMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._floorFunc(input);
        this._roomFunc(input);
    }

    private _floorFunc(input: ICustomDataInput)
    {
        this.floor = input.readVarUhInt();
        if(this.floor < 0)
        {
            throw new Error("Forbidden value (" + this.floor + ") on element of PartyMemberInBreachFightMessage.floor.");
        }
    }

    private _roomFunc(input: ICustomDataInput)
    {
        this.room = input.readByte();
        if(this.room < 0)
        {
            throw new Error("Forbidden value (" + this.room + ") on element of PartyMemberInBreachFightMessage.room.");
        }
    }

}