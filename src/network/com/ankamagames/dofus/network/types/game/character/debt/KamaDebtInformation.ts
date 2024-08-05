import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { DebtInformation } from "./DebtInformation";

export class KamaDebtInformation extends DebtInformation
{

	public static readonly protocolId: number = 2104;

	public kamas: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KamaDebtInformation(input);
    }

    private deserializeAs_KamaDebtInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._kamasFunc(input);
    }

    private _kamasFunc(input: ICustomDataInput)
    {
        this.kamas = input.readVarUhLong();
        if(this.kamas < 0 || this.kamas > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamas + ") on element of KamaDebtInformation.kamas.");
        }
    }

}