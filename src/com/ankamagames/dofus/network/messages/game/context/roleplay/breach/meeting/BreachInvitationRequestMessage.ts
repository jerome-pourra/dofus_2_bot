import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachInvitationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4414;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public guests: Array<number>;

    public constructor()
    {
        super();
        this.guests = Array<number>();
    }

    public getMessageId()
    {
        return BreachInvitationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachInvitationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachInvitationRequestMessage.endpointServer;
    }

    public initBreachInvitationRequestMessage(guests: Array<number> = null): BreachInvitationRequestMessage
    {
        this.guests = guests;
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
        this.serializeAs_BreachInvitationRequestMessage(output);
    }

    public serializeAs_BreachInvitationRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.guests.length);
        for(var _i1: number = 0; _i1 < this.guests.length; _i1++)
        {
            if(this.guests[_i1] < 0 || this.guests[_i1] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.guests[_i1] + ") on element 1 (starting at 1) of guests.");
            }
            output.writeVarLong(this.guests[_i1]);
        }
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