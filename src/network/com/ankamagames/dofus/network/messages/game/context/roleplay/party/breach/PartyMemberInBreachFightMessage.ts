import { AbstractPartyMemberInFightMessage } from "./../AbstractPartyMemberInFightMessage";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";

export class PartyMemberInBreachFightMessage extends AbstractPartyMemberInFightMessage
{

	public static readonly protocolId: number = 2380;

	public floor: number = 0;
	public room: number = 0;

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