import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4414;

	public guests: Array<number>;

    public constructor()
    {
        super();
        this.guests = Array<number>();
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
        this.deserializeAs_BreachInvitationRequestMessage(input);
    }

    private deserializeAs_BreachInvitationRequestMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        let _guestsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _guestsLen; _i1++)
        {
            _val1 = input.readVarUhLong();
            if(_val1 < 0 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of guests.");
            }
            this.guests.push(_val1);
        }
    }

}