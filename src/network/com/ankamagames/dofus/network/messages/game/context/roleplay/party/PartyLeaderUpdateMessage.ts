import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyLeaderUpdateMessage extends AbstractPartyEventMessage
{

	public static readonly protocolId: number = 6439;

	public partyLeaderId: number = 0;

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
        this.deserializeAs_PartyLeaderUpdateMessage(input);
    }

    private deserializeAs_PartyLeaderUpdateMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._partyLeaderIdFunc(input);
    }

    private _partyLeaderIdFunc(input: ICustomDataInput)
    {
        this.partyLeaderId = input.readVarUhLong();
        if(this.partyLeaderId < 0 || this.partyLeaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.partyLeaderId + ") on element of PartyLeaderUpdateMessage.partyLeaderId.");
        }
    }

}