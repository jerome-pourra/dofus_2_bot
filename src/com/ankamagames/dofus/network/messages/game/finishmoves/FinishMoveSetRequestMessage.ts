import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FinishMoveSetRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6930;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public finishMoveId: number = 0;
	public finishMoveState: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FinishMoveSetRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FinishMoveSetRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FinishMoveSetRequestMessage.endpointServer;
    }

    public initFinishMoveSetRequestMessage(finishMoveId: number = 0, finishMoveState: boolean = false): FinishMoveSetRequestMessage
    {
        this.finishMoveId = finishMoveId;
        this.finishMoveState = finishMoveState;
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
        this.serializeAs_FinishMoveSetRequestMessage(output);
    }

    public serializeAs_FinishMoveSetRequestMessage(output: ICustomDataOutput)
    {
        if(this.finishMoveId < 0)
        {
            throw new Error("Forbidden value (" + this.finishMoveId + ") on element finishMoveId.");
        }
        output.writeInt(this.finishMoveId);
        output.writeBoolean(this.finishMoveState);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FinishMoveSetRequestMessage(input);
    }

    private deserializeAs_FinishMoveSetRequestMessage(input: ICustomDataInput)
    {
        this._finishMoveIdFunc(input);
        this._finishMoveStateFunc(input);
    }

    private _finishMoveIdFunc(input: ICustomDataInput)
    {
        this.finishMoveId = input.readInt();
        if(this.finishMoveId < 0)
        {
            throw new Error("Forbidden value (" + this.finishMoveId + ") on element of FinishMoveSetRequestMessage.finishMoveId.");
        }
    }

    private _finishMoveStateFunc(input: ICustomDataInput)
    {
        this.finishMoveState = input.readBoolean();
    }

}