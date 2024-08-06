import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicWhoIsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6759;

	public verbose: boolean = false;
	public target: AbstractPlayerSearchInformation;

    public constructor()
    {
        super();
        this.target = new AbstractPlayerSearchInformation();
    }

    public getMessageId()
    {
        return BasicWhoIsRequestMessage.protocolId;
    }

    public initBasicWhoIsRequestMessage(verbose: boolean = false, target: AbstractPlayerSearchInformation = null): BasicWhoIsRequestMessage
    {
        this.verbose = verbose;
        this.target = target;
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
        this.serializeAs_BasicWhoIsRequestMessage(output);
    }

    public serializeAs_BasicWhoIsRequestMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.verbose);
        output.writeShort(this.target.getTypeId());
        this.target.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicWhoIsRequestMessage(input);
    }

    private deserializeAs_BasicWhoIsRequestMessage(input: ICustomDataInput)
    {
        this._verboseFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.target = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id2);
        this.target.deserialize(input);
    }

    private _verboseFunc(input: ICustomDataInput)
    {
        this.verbose = input.readBoolean();
    }

}