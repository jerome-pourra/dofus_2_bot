import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class TrustStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3339;

	public certified: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TrustStatusMessage.protocolId;
    }

    public initTrustStatusMessage(certified: boolean = false): TrustStatusMessage
    {
        this.certified = certified;
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
        this.serializeAs_TrustStatusMessage(output);
    }

    public serializeAs_TrustStatusMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.certified);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TrustStatusMessage(input);
    }

    private deserializeAs_TrustStatusMessage(input: ICustomDataInput)
    {
        this._certifiedFunc(input);
    }

    private _certifiedFunc(input: ICustomDataInput)
    {
        this.certified = input.readBoolean();
    }

}