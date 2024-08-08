import { NuggetsBeneficiary } from "./../../../types/game/nuggets/NuggetsBeneficiary";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NuggetsDistributionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3417;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public beneficiaries: Array<NuggetsBeneficiary>;

    public constructor()
    {
        super();
        this.beneficiaries = Array<NuggetsBeneficiary>();
    }

    public getMessageId()
    {
        return NuggetsDistributionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NuggetsDistributionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NuggetsDistributionMessage.endpointServer;
    }

    public initNuggetsDistributionMessage(beneficiaries: Array<NuggetsBeneficiary> = null): NuggetsDistributionMessage
    {
        this.beneficiaries = beneficiaries;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_NuggetsDistributionMessage(output);
    }

    public serializeAs_NuggetsDistributionMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.beneficiaries.length);
        for(var _i1: number = 0; _i1 < this.beneficiaries.length; _i1++)
        {
            (this.beneficiaries[_i1] as NuggetsBeneficiary).serializeAs_NuggetsBeneficiary(output);
        }
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