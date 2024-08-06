import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapNoMovementMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6322;

	public cellX: number = 0;
	public cellY: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameMapNoMovementMessage.protocolId;
    }

    public initGameMapNoMovementMessage(cellX: number = 0, cellY: number = 0): GameMapNoMovementMessage
    {
        this.cellX = cellX;
        this.cellY = cellY;
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
        this.serializeAs_GameMapNoMovementMessage(output);
    }

    public serializeAs_GameMapNoMovementMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.cellX);
        output.writeShort(this.cellY);
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