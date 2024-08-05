import { NuggetsBeneficiary } from "./../../../types/game/nuggets/NuggetsBeneficiary";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NuggetsDistributionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3417;

	public beneficiaries: Array<NuggetsBeneficiary>;

    public constructor()
    {
        super();
        this.beneficiaries = Array<NuggetsBeneficiary>();
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
        this.deserializeAs_NuggetsDistributionMessage(input);
    }

    private deserializeAs_NuggetsDistributionMessage(input: ICustomDataInput)
    {
        let _item1: NuggetsBeneficiary;
        let _beneficiariesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _beneficiariesLen; _i1++)
        {
            _item1 = new NuggetsBeneficiary();
            _item1.deserialize(input);
            this.beneficiaries.push(_item1);
        }
    }

}