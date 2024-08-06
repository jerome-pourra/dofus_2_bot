import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DungeonKeyRingUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6518;

	public dungeonId: number = 0;
	public available: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DungeonKeyRingUpdateMessage.protocolId;
    }

    public initDungeonKeyRingUpdateMessage(dungeonId: number = 0, available: boolean = false): DungeonKeyRingUpdateMessage
    {
        this.dungeonId = dungeonId;
        this.available = available;
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
        this.serializeAs_DungeonKeyRingUpdateMessage(output);
    }

    public serializeAs_DungeonKeyRingUpdateMessage(output: ICustomDataOutput)
    {
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
        output.writeBoolean(this.available);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonKeyRingUpdateMessage(input);
    }

    private deserializeAs_DungeonKeyRingUpdateMessage(input: ICustomDataInput)
    {
        this._dungeonIdFunc(input);
        this._availableFunc(input);
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonKeyRingUpdateMessage.dungeonId.");
        }
    }

    private _availableFunc(input: ICustomDataInput)
    {
        this.available = input.readBoolean();
    }

}