import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicPongMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4877;

	public quiet: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicPongMessage.protocolId;
    }

    public initBasicPongMessage(quiet: boolean = false): BasicPongMessage
    {
        this.quiet = quiet;
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
        this.serializeAs_BasicPongMessage(output);
    }

    public serializeAs_BasicPongMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.quiet);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicPongMessage(input);
    }

    private deserializeAs_BasicPongMessage(input: ICustomDataInput)
    {
        this._quietFunc(input);
    }

    private _quietFunc(input: ICustomDataInput)
    {
        this.quiet = input.readBoolean();
    }

}