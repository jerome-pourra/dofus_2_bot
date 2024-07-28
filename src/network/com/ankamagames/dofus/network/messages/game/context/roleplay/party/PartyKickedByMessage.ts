import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyKickedByMessage extends AbstractPartyMessage
{

	public static readonly protocolId: number = 4958;

	public kickerId: number = 0;

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
        this.deserializeAs_PartyKickedByMessage(input);
    }

    private deserializeAs_PartyKickedByMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._kickerIdFunc(input);
    }

    private _kickerIdFunc(input: ICustomDataInput)
    {
        this.kickerId = input.readVarUhLong();
        if(this.kickerId < 0 || this.kickerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickerId + ") on element of PartyKickedByMessage.kickerId.");
        }
    }

}