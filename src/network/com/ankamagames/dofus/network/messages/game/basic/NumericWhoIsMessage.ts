import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NumericWhoIsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2693;

	public playerId: number = 0;
	public accountId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NumericWhoIsMessage.protocolId;
    }

    public initNumericWhoIsMessage(playerId: number = 0, accountId: number = 0): NumericWhoIsMessage
    {
        this.playerId = playerId;
        this.accountId = accountId;
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
        this.serializeAs_NumericWhoIsMessage(output);
    }

    public serializeAs_NumericWhoIsMessage(output: ICustomDataOutput)
    {
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NumericWhoIsMessage(input);
    }

    private deserializeAs_NumericWhoIsMessage(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
        this._accountIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of NumericWhoIsMessage.playerId.");
        }
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of NumericWhoIsMessage.accountId.");
        }
    }

}