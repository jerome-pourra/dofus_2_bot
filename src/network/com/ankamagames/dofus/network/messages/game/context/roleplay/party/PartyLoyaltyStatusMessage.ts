import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyLoyaltyStatusMessage extends AbstractPartyMessage
{

	public static readonly protocolId: number = 5384;

	public loyal: boolean = false;

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
        this.deserializeAs_PartyLoyaltyStatusMessage(input);
    }

    private deserializeAs_PartyLoyaltyStatusMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._loyalFunc(input);
    }

    private _loyalFunc(input: ICustomDataInput)
    {
        this.loyal = input.readBoolean();
    }

}