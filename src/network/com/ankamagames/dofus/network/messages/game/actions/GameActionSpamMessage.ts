import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameActionSpamMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9805;

	public cells: Array<number>;

    public constructor()
    {
        super();
        this.cells = Array<number>();
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
        this.deserializeAs_GameActionSpamMessage(input);
    }

    private deserializeAs_GameActionSpamMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _cellsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _cellsLen; _i1++)
        {
            _val1 = input.readShort();
            this.cells.push(_val1);
        }
    }

}