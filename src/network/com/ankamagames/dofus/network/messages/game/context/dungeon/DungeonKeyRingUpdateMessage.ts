import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DungeonKeyRingUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6518;

	public dungeonId: number = 0;
	public available: boolean = false;

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