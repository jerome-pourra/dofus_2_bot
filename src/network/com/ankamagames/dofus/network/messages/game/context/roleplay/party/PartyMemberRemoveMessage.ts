import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyMemberRemoveMessage extends AbstractPartyEventMessage
{

	public static readonly protocolId: number = 7328;

	public leavingPlayerId: number = 0;

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
        this.deserializeAs_PartyMemberRemoveMessage(input);
    }

    private deserializeAs_PartyMemberRemoveMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._leavingPlayerIdFunc(input);
    }

    private _leavingPlayerIdFunc(input: ICustomDataInput)
    {
        this.leavingPlayerId = input.readVarUhLong();
        if(this.leavingPlayerId < 0 || this.leavingPlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leavingPlayerId + ") on element of PartyMemberRemoveMessage.leavingPlayerId.");
        }
    }

}