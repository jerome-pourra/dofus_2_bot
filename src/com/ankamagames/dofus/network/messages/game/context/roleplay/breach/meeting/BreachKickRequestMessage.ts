import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachKickRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4588;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public target: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachKickRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachKickRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachKickRequestMessage.endpointServer;
    }

    public initBreachKickRequestMessage(target: number = 0): BreachKickRequestMessage
    {
        this.target = target;
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
        this.serializeAs_BreachKickRequestMessage(output);
    }

    public serializeAs_BreachKickRequestMessage(output: ICustomDataOutput)
    {
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element target.");
        }
        output.writeVarLong(this.target);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachKickRequestMessage(input);
    }

    private deserializeAs_BreachKickRequestMessage(input: ICustomDataInput)
    {
        this._targetFunc(input);
    }

    private _targetFunc(input: ICustomDataInput)
    {
        this.target = input.readVarUhLong();
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element of BreachKickRequestMessage.target.");
        }
    }

}