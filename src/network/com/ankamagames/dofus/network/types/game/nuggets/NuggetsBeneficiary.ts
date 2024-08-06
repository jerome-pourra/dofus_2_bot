import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class NuggetsBeneficiary implements INetworkType
{

	public static readonly protocolId: number = 7825;

	public beneficiaryPlayerId: number = 0;
	public nuggetsQuantity: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return NuggetsBeneficiary.protocolId;
    }

    public initNuggetsBeneficiary(beneficiaryPlayerId: number = 0, nuggetsQuantity: number = 0): NuggetsBeneficiary
    {
        this.beneficiaryPlayerId = beneficiaryPlayerId;
        this.nuggetsQuantity = nuggetsQuantity;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_NuggetsBeneficiary(output);
    }

    public serializeAs_NuggetsBeneficiary(output: ICustomDataOutput)
    {
        if(this.beneficiaryPlayerId < 0 || this.beneficiaryPlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.beneficiaryPlayerId + ") on element beneficiaryPlayerId.");
        }
        output.writeVarLong(this.beneficiaryPlayerId);
        output.writeInt(this.nuggetsQuantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NuggetsBeneficiary(input);
    }

    private deserializeAs_NuggetsBeneficiary(input: ICustomDataInput)
    {
        this._beneficiaryPlayerIdFunc(input);
        this._nuggetsQuantityFunc(input);
    }

    private _beneficiaryPlayerIdFunc(input: ICustomDataInput)
    {
        this.beneficiaryPlayerId = input.readVarUhLong();
        if(this.beneficiaryPlayerId < 0 || this.beneficiaryPlayerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.beneficiaryPlayerId + ") on element of NuggetsBeneficiary.beneficiaryPlayerId.");
        }
    }

    private _nuggetsQuantityFunc(input: ICustomDataInput)
    {
        this.nuggetsQuantity = input.readInt();
    }

}