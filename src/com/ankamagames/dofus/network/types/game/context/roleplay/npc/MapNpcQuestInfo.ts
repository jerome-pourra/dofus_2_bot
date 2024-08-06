import { GameRolePlayNpcQuestFlag } from "./../quest/GameRolePlayNpcQuestFlag";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class MapNpcQuestInfo implements INetworkType
{

	public static readonly protocolId: number = 7887;

	public mapId: number = 0;
	public npcsIdsWithQuest: Array<number>;
	public questFlags: Array<GameRolePlayNpcQuestFlag>;

    public constructor()
    {
        this.npcsIdsWithQuest = Array<number>();
        this.questFlags = Array<GameRolePlayNpcQuestFlag>();
    }

    public getTypeId()
    {
        return MapNpcQuestInfo.protocolId;
    }

    public initMapNpcQuestInfo(mapId: number = 0, npcsIdsWithQuest: Array<number> = null, questFlags: Array<GameRolePlayNpcQuestFlag> = null): MapNpcQuestInfo
    {
        this.mapId = mapId;
        this.npcsIdsWithQuest = npcsIdsWithQuest;
        this.questFlags = questFlags;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MapNpcQuestInfo(output);
    }

    public serializeAs_MapNpcQuestInfo(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        output.writeShort(this.npcsIdsWithQuest.length);
        for(var _i2: number = 0; _i2 < this.npcsIdsWithQuest.length; _i2++)
        {
            output.writeInt(this.npcsIdsWithQuest[_i2]);
        }
        output.writeShort(this.questFlags.length);
        for(var _i3: number = 0; _i3 < this.questFlags.length; _i3++)
        {
            (this.questFlags[_i3] as GameRolePlayNpcQuestFlag).serializeAs_GameRolePlayNpcQuestFlag(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapNpcQuestInfo(input);
    }

    private deserializeAs_MapNpcQuestInfo(input: ICustomDataInput)
    {
        let _val2: number = 0;
        let _item3: GameRolePlayNpcQuestFlag;
        this._mapIdFunc(input);
        let _npcsIdsWithQuestLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _npcsIdsWithQuestLen; _i2++)
        {
            _val2 = input.readInt();
            this.npcsIdsWithQuest.push(_val2);
        }
        let _questFlagsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _questFlagsLen; _i3++)
        {
            _item3 = new GameRolePlayNpcQuestFlag();
            _item3.deserialize(input);
            this.questFlags.push(_item3);
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of MapNpcQuestInfo.mapId.");
        }
    }

}