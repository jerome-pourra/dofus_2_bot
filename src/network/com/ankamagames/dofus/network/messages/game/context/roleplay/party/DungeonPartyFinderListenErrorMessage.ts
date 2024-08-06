import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DungeonPartyFinderListenErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6905;

	public dungeonId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DungeonPartyFinderListenErrorMessage.protocolId;
    }

    public initDungeonPartyFinderListenErrorMessage(dungeonId: number = 0): DungeonPartyFinderListenErrorMessage
    {
        this.dungeonId = dungeonId;
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
        this.serializeAs_DungeonPartyFinderListenErrorMessage(output);
    }

    public serializeAs_DungeonPartyFinderListenErrorMessage(output: ICustomDataOutput)
    {
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonPartyFinderListenErrorMessage(input);
    }

    private deserializeAs_DungeonPartyFinderListenErrorMessage(input: ICustomDataInput)
    {
        this._dungeonIdFunc(input);
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonPartyFinderListenErrorMessage.dungeonId.");
        }
    }

}