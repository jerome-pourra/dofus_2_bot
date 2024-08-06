import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameDataPaddockObjectRemoveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9218;

	public cellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameDataPaddockObjectRemoveMessage.protocolId;
    }

    public initGameDataPaddockObjectRemoveMessage(cellId: number = 0): GameDataPaddockObjectRemoveMessage
    {
        this.cellId = cellId;
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
        this.serializeAs_GameDataPaddockObjectRemoveMessage(output);
    }

    public serializeAs_GameDataPaddockObjectRemoveMessage(output: ICustomDataOutput)
    {
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeVarShort(this.cellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameDataPaddockObjectRemoveMessage(input);
    }

    private deserializeAs_GameDataPaddockObjectRemoveMessage(input: ICustomDataInput)
    {
        this._cellIdFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of GameDataPaddockObjectRemoveMessage.cellId.");
        }
    }

}