import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MoodSmileyUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2215;

	public accountId: number = 0;
	public playerId: number = 0;
	public smileyId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MoodSmileyUpdateMessage.protocolId;
    }

    public initMoodSmileyUpdateMessage(accountId: number = 0, playerId: number = 0, smileyId: number = 0): MoodSmileyUpdateMessage
    {
        this.accountId = accountId;
        this.playerId = playerId;
        this.smileyId = smileyId;
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
        this.serializeAs_MoodSmileyUpdateMessage(output);
    }

    public serializeAs_MoodSmileyUpdateMessage(output: ICustomDataOutput)
    {
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
        }
        output.writeVarShort(this.smileyId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MoodSmileyUpdateMessage(input);
    }

    private deserializeAs_MoodSmileyUpdateMessage(input: ICustomDataInput)
    {
        this._accountIdFunc(input);
        this._playerIdFunc(input);
        this._smileyIdFunc(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of MoodSmileyUpdateMessage.accountId.");
        }
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of MoodSmileyUpdateMessage.playerId.");
        }
    }

    private _smileyIdFunc(input: ICustomDataInput)
    {
        this.smileyId = input.readVarUhShort();
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element of MoodSmileyUpdateMessage.smileyId.");
        }
    }

}