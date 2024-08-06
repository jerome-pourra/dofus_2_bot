import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyKickedByMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4958;

	public kickerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyKickedByMessage.protocolId;
    }

    public initPartyKickedByMessage(partyId: number = 0, kickerId: number = 0): PartyKickedByMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.kickerId = kickerId;
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
        this.serializeAs_PartyKickedByMessage(output);
    }

    public serializeAs_PartyKickedByMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        if(this.kickerId < 0 || this.kickerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickerId + ") on element kickerId.");
        }
        output.writeVarLong(this.kickerId);
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