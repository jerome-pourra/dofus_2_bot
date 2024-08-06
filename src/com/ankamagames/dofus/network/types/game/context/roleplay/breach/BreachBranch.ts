import { MonsterInGroupLightInformations } from "./../MonsterInGroupLightInformations";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class BreachBranch implements INetworkType
{

	public static readonly protocolId: number = 7507;

	public room: number = 0;
	public element: number = 0;
	public bosses: Array<MonsterInGroupLightInformations>;
	public map: number = 0;
	public score: number = 0;
	public relativeScore: number = 0;
	public monsters: Array<MonsterInGroupLightInformations>;

    public constructor()
    {
        this.bosses = Array<MonsterInGroupLightInformations>();
        this.monsters = Array<MonsterInGroupLightInformations>();
    }

    public getTypeId()
    {
        return BreachBranch.protocolId;
    }

    public initBreachBranch(room: number = 0, element: number = 0, bosses: Array<MonsterInGroupLightInformations> = null, map: number = 0, score: number = 0, relativeScore: number = 0, monsters: Array<MonsterInGroupLightInformations> = null): BreachBranch
    {
        this.room = room;
        this.element = element;
        this.bosses = bosses;
        this.map = map;
        this.score = score;
        this.relativeScore = relativeScore;
        this.monsters = monsters;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BreachBranch(output);
    }

    public serializeAs_BreachBranch(output: ICustomDataOutput)
    {
        if(this.room < 0)
        {
            throw new Error("Forbidden value (" + this.room + ") on element room.");
        }
        output.writeByte(this.room);
        if(this.element < 0)
        {
            throw new Error("Forbidden value (" + this.element + ") on element element.");
        }
        output.writeInt(this.element);
        output.writeShort(this.bosses.length);
        for(var _i3: number = 0; _i3 < this.bosses.length; _i3++)
        {
            (this.bosses[_i3] as MonsterInGroupLightInformations).serializeAs_MonsterInGroupLightInformations(output);
        }
        if(this.map < 0 || this.map > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.map + ") on element map.");
        }
        output.writeDouble(this.map);
        output.writeShort(this.score);
        output.writeShort(this.relativeScore);
        output.writeShort(this.monsters.length);
        for(var _i7: number = 0; _i7 < this.monsters.length; _i7++)
        {
            (this.monsters[_i7] as MonsterInGroupLightInformations).serializeAs_MonsterInGroupLightInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachBranch(input);
    }

    private deserializeAs_BreachBranch(input: ICustomDataInput)
    {
        let _item3: MonsterInGroupLightInformations;
        let _item7: MonsterInGroupLightInformations;
        this._roomFunc(input);
        this._elementFunc(input);
        let _bossesLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _bossesLen; _i3++)
        {
            _item3 = new MonsterInGroupLightInformations();
            _item3.deserialize(input);
            this.bosses.push(_item3);
        }
        this._mapFunc(input);
        this._scoreFunc(input);
        this._relativeScoreFunc(input);
        let _monstersLen: number = input.readUnsignedShort();
        for(let _i7: number = 0; _i7 < _monstersLen; _i7++)
        {
            _item7 = new MonsterInGroupLightInformations();
            _item7.deserialize(input);
            this.monsters.push(_item7);
        }
    }

    private _roomFunc(input: ICustomDataInput)
    {
        this.room = input.readByte();
        if(this.room < 0)
        {
            throw new Error("Forbidden value (" + this.room + ") on element of BreachBranch.room.");
        }
    }

    private _elementFunc(input: ICustomDataInput)
    {
        this.element = input.readInt();
        if(this.element < 0)
        {
            throw new Error("Forbidden value (" + this.element + ") on element of BreachBranch.element.");
        }
    }

    private _mapFunc(input: ICustomDataInput)
    {
        this.map = input.readDouble();
        if(this.map < 0 || this.map > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.map + ") on element of BreachBranch.map.");
        }
    }

    private _scoreFunc(input: ICustomDataInput)
    {
        this.score = input.readShort();
    }

    private _relativeScoreFunc(input: ICustomDataInput)
    {
        this.relativeScore = input.readShort();
    }

}