import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SubareaRewardRateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1678;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public subAreaRate: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SubareaRewardRateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SubareaRewardRateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SubareaRewardRateMessage.endpointServer;
    }

    public initSubareaRewardRateMessage(subAreaRate: number = 0): SubareaRewardRateMessage
    {
        this.subAreaRate = subAreaRate;
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
        this.serializeAs_SubareaRewardRateMessage(output);
    }

    public serializeAs_SubareaRewardRateMessage(output: ICustomDataOutput)
    {
        output.writeVarShort(this.subAreaRate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SubareaRewardRateMessage(input);
    }

    private deserializeAs_SubareaRewardRateMessage(input: ICustomDataInput)
    {
        this._subAreaRateFunc(input);
    }

    private _subAreaRateFunc(input: ICustomDataInput)
    {
        this.subAreaRate = input.readVarShort();
    }

}