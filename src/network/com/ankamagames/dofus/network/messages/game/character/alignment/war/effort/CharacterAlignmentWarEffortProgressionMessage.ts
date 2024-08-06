import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class CharacterAlignmentWarEffortProgressionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2916;

	public alignmentWarEffortDailyLimit: number = 0;
	public alignmentWarEffortDailyDonation: number = 0;
	public alignmentWarEffortPersonalDonation: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterAlignmentWarEffortProgressionMessage.protocolId;
    }

    public initCharacterAlignmentWarEffortProgressionMessage(alignmentWarEffortDailyLimit: number = 0, alignmentWarEffortDailyDonation: number = 0, alignmentWarEffortPersonalDonation: number = 0): CharacterAlignmentWarEffortProgressionMessage
    {
        this.alignmentWarEffortDailyLimit = alignmentWarEffortDailyLimit;
        this.alignmentWarEffortDailyDonation = alignmentWarEffortDailyDonation;
        this.alignmentWarEffortPersonalDonation = alignmentWarEffortPersonalDonation;
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
        this.serializeAs_CharacterAlignmentWarEffortProgressionMessage(output);
    }

    public serializeAs_CharacterAlignmentWarEffortProgressionMessage(output: ICustomDataOutput)
    {
        if(this.alignmentWarEffortDailyLimit < 0 || this.alignmentWarEffortDailyLimit > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.alignmentWarEffortDailyLimit + ") on element alignmentWarEffortDailyLimit.");
        }
        output.writeVarLong(this.alignmentWarEffortDailyLimit);
        if(this.alignmentWarEffortDailyDonation < 0 || this.alignmentWarEffortDailyDonation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.alignmentWarEffortDailyDonation + ") on element alignmentWarEffortDailyDonation.");
        }
        output.writeVarLong(this.alignmentWarEffortDailyDonation);
        if(this.alignmentWarEffortPersonalDonation < 0 || this.alignmentWarEffortPersonalDonation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.alignmentWarEffortPersonalDonation + ") on element alignmentWarEffortPersonalDonation.");
        }
        output.writeVarLong(this.alignmentWarEffortPersonalDonation);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterAlignmentWarEffortProgressionMessage(input);
    }

    private deserializeAs_CharacterAlignmentWarEffortProgressionMessage(input: ICustomDataInput)
    {
        this._alignmentWarEffortDailyLimitFunc(input);
        this._alignmentWarEffortDailyDonationFunc(input);
        this._alignmentWarEffortPersonalDonationFunc(input);
    }

    private _alignmentWarEffortDailyLimitFunc(input: ICustomDataInput)
    {
        this.alignmentWarEffortDailyLimit = input.readVarUhLong();
        if(this.alignmentWarEffortDailyLimit < 0 || this.alignmentWarEffortDailyLimit > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.alignmentWarEffortDailyLimit + ") on element of CharacterAlignmentWarEffortProgressionMessage.alignmentWarEffortDailyLimit.");
        }
    }

    private _alignmentWarEffortDailyDonationFunc(input: ICustomDataInput)
    {
        this.alignmentWarEffortDailyDonation = input.readVarUhLong();
        if(this.alignmentWarEffortDailyDonation < 0 || this.alignmentWarEffortDailyDonation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.alignmentWarEffortDailyDonation + ") on element of CharacterAlignmentWarEffortProgressionMessage.alignmentWarEffortDailyDonation.");
        }
    }

    private _alignmentWarEffortPersonalDonationFunc(input: ICustomDataInput)
    {
        this.alignmentWarEffortPersonalDonation = input.readVarUhLong();
        if(this.alignmentWarEffortPersonalDonation < 0 || this.alignmentWarEffortPersonalDonation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.alignmentWarEffortPersonalDonation + ") on element of CharacterAlignmentWarEffortProgressionMessage.alignmentWarEffortPersonalDonation.");
        }
    }

}