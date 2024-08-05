import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DungeonKeyRingMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6819;

	public availables: Array<number>;
	public unavailables: Array<number>;

    public constructor()
    {
        super();
        this.availables = Array<number>();
        this.unavailables = Array<number>();
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
        this.deserializeAs_DungeonKeyRingMessage(input);
    }

    private deserializeAs_DungeonKeyRingMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _availablesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _availablesLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of availables.");
            }
            this.availables.push(_val1);
        }
        let _unavailablesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _unavailablesLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of unavailables.");
            }
            this.unavailables.push(_val2);
        }
    }

}