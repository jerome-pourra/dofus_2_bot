import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InvalidPresetsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1001;

	public presetIds: Array<number>;

    public constructor()
    {
        super();
        this.presetIds = Array<number>();
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
        this.deserializeAs_InvalidPresetsMessage(input);
    }

    private deserializeAs_InvalidPresetsMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _presetIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _presetIdsLen; _i1++)
        {
            _val1 = input.readShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of presetIds.");
            }
            this.presetIds.push(_val1);
        }
    }

}