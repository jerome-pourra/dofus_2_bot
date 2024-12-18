import { LockableChangeCodeMessage } from "./../lockable/LockableChangeCodeMessage";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";

export class HouseLockFromInsideRequestMessage extends LockableChangeCodeMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9529;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseLockFromInsideRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HouseLockFromInsideRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseLockFromInsideRequestMessage.endpointServer;
    }

    public initHouseLockFromInsideRequestMessage(code: string = ""): HouseLockFromInsideRequestMessage
    {
        super.initLockableChangeCodeMessage(code);
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
        this.serializeAs_HouseLockFromInsideRequestMessage(output);
    }

    public serializeAs_HouseLockFromInsideRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_LockableChangeCodeMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseLockFromInsideRequestMessage(input);
    }

    private deserializeAs_HouseLockFromInsideRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}