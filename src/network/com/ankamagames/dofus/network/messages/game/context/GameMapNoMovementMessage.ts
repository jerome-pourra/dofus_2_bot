import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapNoMovementMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6322;

	public cellX: number = 0;
	public cellY: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_GameMapNoMovementMessage(input);
    }

    private deserializeAs_GameMapNoMovementMessage(input: ICustomDataInput)
    {
        this._cellXFunc(input);
        this._cellYFunc(input);
    }

    private _cellXFunc(input: ICustomDataInput)
    {
        this.cellX = input.readShort();
    }

    private _cellYFunc(input: ICustomDataInput)
    {
        this.cellY = input.readShort();
    }

}