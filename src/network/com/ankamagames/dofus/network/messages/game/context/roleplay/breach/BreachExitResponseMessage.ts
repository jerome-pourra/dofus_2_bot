import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachExitResponseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6746;

	public exited: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachExitResponseMessage.protocolId;
    }

    public initBreachExitResponseMessage(exited: boolean = false): BreachExitResponseMessage
    {
        this.exited = exited;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BreachExitResponseMessage(output);
    }

    public serializeAs_BreachExitResponseMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.exited);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachExitResponseMessage(input);
    }

    private deserializeAs_BreachExitResponseMessage(input: ICustomDataInput)
    {
        this._exitedFunc(input);
    }

    private _exitedFunc(input: ICustomDataInput)
    {
        this.exited = input.readBoolean();
    }

}