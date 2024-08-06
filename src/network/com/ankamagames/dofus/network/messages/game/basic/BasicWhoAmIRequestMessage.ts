import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicWhoAmIRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 390;

	public verbose: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicWhoAmIRequestMessage.protocolId;
    }

    public initBasicWhoAmIRequestMessage(verbose: boolean = false): BasicWhoAmIRequestMessage
    {
        this.verbose = verbose;
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
        this.serializeAs_BasicWhoAmIRequestMessage(output);
    }

    public serializeAs_BasicWhoAmIRequestMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.verbose);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicWhoAmIRequestMessage(input);
    }

    private deserializeAs_BasicWhoAmIRequestMessage(input: ICustomDataInput)
    {
        this._verboseFunc(input);
    }

    private _verboseFunc(input: ICustomDataInput)
    {
        this.verbose = input.readBoolean();
    }

}