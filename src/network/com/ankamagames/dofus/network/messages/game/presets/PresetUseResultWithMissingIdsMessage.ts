import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { PresetUseResultMessage } from "./PresetUseResultMessage";

export class PresetUseResultWithMissingIdsMessage extends PresetUseResultMessage
{

	public static readonly protocolId: number = 5059;

	public missingIds: Array<number>;

    public constructor()
    {
        super();
        this.missingIds = Array<number>();
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
        this.deserializeAs_PresetUseResultWithMissingIdsMessage(input);
    }

    private deserializeAs_PresetUseResultWithMissingIdsMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        super.deserialize(input);
        let _missingIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _missingIdsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of missingIds.");
            }
            this.missingIds.push(_val1);
        }
    }

}