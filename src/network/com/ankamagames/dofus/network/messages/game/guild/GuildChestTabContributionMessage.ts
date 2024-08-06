import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildChestTabContributionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8050;

	public tabNumber: number = 0;
	public requiredAmount: number = 0;
	public currentAmount: number = 0;
	public chestContributionEnrollmentDelay: number = 0;
	public chestContributionDelay: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildChestTabContributionMessage.protocolId;
    }

    public initGuildChestTabContributionMessage(tabNumber: number = 0, requiredAmount: number = 0, currentAmount: number = 0, chestContributionEnrollmentDelay: number = 0, chestContributionDelay: number = 0): GuildChestTabContributionMessage
    {
        this.tabNumber = tabNumber;
        this.requiredAmount = requiredAmount;
        this.currentAmount = currentAmount;
        this.chestContributionEnrollmentDelay = chestContributionEnrollmentDelay;
        this.chestContributionDelay = chestContributionDelay;
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
        this.serializeAs_GuildChestTabContributionMessage(output);
    }

    public serializeAs_GuildChestTabContributionMessage(output: ICustomDataOutput)
    {
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element tabNumber.");
        }
        output.writeVarInt(this.tabNumber);
        if(this.requiredAmount < 0 || this.requiredAmount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requiredAmount + ") on element requiredAmount.");
        }
        output.writeVarLong(this.requiredAmount);
        if(this.currentAmount < 0 || this.currentAmount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.currentAmount + ") on element currentAmount.");
        }
        output.writeVarLong(this.currentAmount);
        if(this.chestContributionEnrollmentDelay < 0 || this.chestContributionEnrollmentDelay > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.chestContributionEnrollmentDelay + ") on element chestContributionEnrollmentDelay.");
        }
        output.writeDouble(this.chestContributionEnrollmentDelay);
        if(this.chestContributionDelay < 0 || this.chestContributionDelay > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.chestContributionDelay + ") on element chestContributionDelay.");
        }
        output.writeDouble(this.chestContributionDelay);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildChestTabContributionMessage(input);
    }

    private deserializeAs_GuildChestTabContributionMessage(input: ICustomDataInput)
    {
        this._tabNumberFunc(input);
        this._requiredAmountFunc(input);
        this._currentAmountFunc(input);
        this._chestContributionEnrollmentDelayFunc(input);
        this._chestContributionDelayFunc(input);
    }

    private _tabNumberFunc(input: ICustomDataInput)
    {
        this.tabNumber = input.readVarUhInt();
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element of GuildChestTabContributionMessage.tabNumber.");
        }
    }

    private _requiredAmountFunc(input: ICustomDataInput)
    {
        this.requiredAmount = input.readVarUhLong();
        if(this.requiredAmount < 0 || this.requiredAmount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requiredAmount + ") on element of GuildChestTabContributionMessage.requiredAmount.");
        }
    }

    private _currentAmountFunc(input: ICustomDataInput)
    {
        this.currentAmount = input.readVarUhLong();
        if(this.currentAmount < 0 || this.currentAmount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.currentAmount + ") on element of GuildChestTabContributionMessage.currentAmount.");
        }
    }

    private _chestContributionEnrollmentDelayFunc(input: ICustomDataInput)
    {
        this.chestContributionEnrollmentDelay = input.readDouble();
        if(this.chestContributionEnrollmentDelay < 0 || this.chestContributionEnrollmentDelay > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.chestContributionEnrollmentDelay + ") on element of GuildChestTabContributionMessage.chestContributionEnrollmentDelay.");
        }
    }

    private _chestContributionDelayFunc(input: ICustomDataInput)
    {
        this.chestContributionDelay = input.readDouble();
        if(this.chestContributionDelay < 0 || this.chestContributionDelay > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.chestContributionDelay + ") on element of GuildChestTabContributionMessage.chestContributionDelay.");
        }
    }

}