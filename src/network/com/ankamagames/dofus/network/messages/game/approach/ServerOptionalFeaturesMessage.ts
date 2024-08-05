import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ServerOptionalFeaturesMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8385;

	public features: Array<number>;

    public constructor()
    {
        super();
        this.features = Array<number>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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