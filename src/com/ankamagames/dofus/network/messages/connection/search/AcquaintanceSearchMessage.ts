import { AccountTagInformation } from "./../../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AcquaintanceSearchMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1642;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public tag: AccountTagInformation;

    public constructor()
    {
        super();
        this.tag = new AccountTagInformation();
    }

    public getMessageId()
    {
        return AcquaintanceSearchMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AcquaintanceSearchMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AcquaintanceSearchMessage.endpointServer;
    }

    public initAcquaintanceSearchMessage(tag: AccountTagInformation = null): AcquaintanceSearchMessage
    {
        this.tag = tag;
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
        this.serializeAs_AcquaintanceSearchMessage(output);
    }

    public serializeAs_AcquaintanceSearchMessage(output: ICustomDataOutput)
    {
        this.tag.serializeAs_AccountTagInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AcquaintanceSearchMessage(input);
    }

    private deserializeAs_AcquaintanceSearchMessage(input: ICustomDataInput)
    {
        this.tag = new AccountTagInformation();
        this.tag.deserialize(input);
    }

}