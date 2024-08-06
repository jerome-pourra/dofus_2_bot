import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyKickRequestMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7926;

	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyKickRequestMessage.protocolId;
    }

    public initPartyKickRequestMessage(partyId: number = 0, playerId: number = 0): PartyKickRequestMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.playerId = playerId;
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
        this.serializeAs_PartyKickRequestMessage(output);
    }

    public serializeAs_PartyKickRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyKickRequestMessage(input);
    }

    private deserializeAs_PartyKickRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of PartyKickRequestMessage.playerId.");
        }
    }

}