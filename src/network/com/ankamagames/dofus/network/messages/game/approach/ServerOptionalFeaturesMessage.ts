import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ServerOptionalFeaturesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8385;

	public features: Array<number>;

    public constructor()
    {
        super();
        this.features = Array<number>();
    }

    public getMessageId()
    {
        return ServerOptionalFeaturesMessage.protocolId;
    }

    public initServerOptionalFeaturesMessage(features: Array<number> = null): ServerOptionalFeaturesMessage
    {
        this.features = features;
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
        this.serializeAs_ServerOptionalFeaturesMessage(output);
    }

    public serializeAs_ServerOptionalFeaturesMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.features.length);
        for(var _i1: number = 0; _i1 < this.features.length; _i1++)
        {
            if(this.features[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.features[_i1] + ") on element 1 (starting at 1) of features.");
            }
            output.writeInt(this.features[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ServerOptionalFeaturesMessage(input);
    }

    private deserializeAs_ServerOptionalFeaturesMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _featuresLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _featuresLen; _i1++)
        {
            _val1 = input.readInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of features.");
            }
            this.features.push(_val1);
        }
    }

}