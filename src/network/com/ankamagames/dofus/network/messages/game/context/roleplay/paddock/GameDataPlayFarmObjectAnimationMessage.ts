import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameDataPlayFarmObjectAnimationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8213;

	public cellId: Array<number>;

    public constructor()
    {
        super();
        this.cellId = Array<number>();
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
        this.deserializeAs_GameDataPlayFarmObjectAnimationMessage(input);
    }

    private deserializeAs_GameDataPlayFarmObjectAnimationMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _cellIdLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _cellIdLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0 || _val1 > 559)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of cellId.");
            }
            this.cellId.push(_val1);
        }
    }

}