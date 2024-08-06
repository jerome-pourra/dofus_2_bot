import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { IdentificationFailedMessage } from "./IdentificationFailedMessage";

export class IdentificationFailedBannedMessage extends IdentificationFailedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8668;

	public banEndDate: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return IdentificationFailedBannedMessage.protocolId;
    }

    public initIdentificationFailedBannedMessage(reason: number = 99, banEndDate: number = 0): IdentificationFailedBannedMessage
    {
        super.initIdentificationFailedMessage(reason);
        this.banEndDate = banEndDate;
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
        this.serializeAs_IdentificationFailedBannedMessage(output);
    }

    public serializeAs_IdentificationFailedBannedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_IdentificationFailedMessage(output);
        if(this.banEndDate < 0 || this.banEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.banEndDate + ") on element banEndDate.");
        }
        output.writeDouble(this.banEndDate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IdentificationFailedBannedMessage(input);
    }

    private deserializeAs_IdentificationFailedBannedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._banEndDateFunc(input);
    }

    private _banEndDateFunc(input: ICustomDataInput)
    {
        this.banEndDate = input.readDouble();
        if(this.banEndDate < 0 || this.banEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.banEndDate + ") on element of IdentificationFailedBannedMessage.banEndDate.");
        }
    }

}