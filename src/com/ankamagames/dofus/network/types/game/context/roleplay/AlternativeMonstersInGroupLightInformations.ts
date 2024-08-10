import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { MonsterInGroupLightInformations } from "./MonsterInGroupLightInformations";

export class AlternativeMonstersInGroupLightInformations implements INetworkType
{

	public static readonly protocolId: number = 6089;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public playerCount: number = 0;
	public monsters: Array<MonsterInGroupLightInformations>;

    public constructor()
    {
        this.monsters = Array<MonsterInGroupLightInformations>();
    }

    public getTypeId()
    {
        return AlternativeMonstersInGroupLightInformations.protocolId;
    }

    public isEndpointClient()
    {
        return AlternativeMonstersInGroupLightInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return AlternativeMonstersInGroupLightInformations.endpointServer;
    }

    public initAlternativeMonstersInGroupLightInformations(playerCount: number = 0, monsters: Array<MonsterInGroupLightInformations> = null): AlternativeMonstersInGroupLightInformations
    {
        this.playerCount = playerCount;
        this.monsters = monsters;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AlternativeMonstersInGroupLightInformations(output);
    }

    public serializeAs_AlternativeMonstersInGroupLightInformations(output: ICustomDataOutput)
    {
        output.writeInt(this.playerCount);
        output.writeShort(this.monsters.length);
        for(var _i2: number = 0; _i2 < this.monsters.length; _i2++)
        {
            (this.monsters[_i2] as MonsterInGroupLightInformations).serializeAs_MonsterInGroupLightInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlternativeMonstersInGroupLightInformations(input);
    }

    private deserializeAs_AlternativeMonstersInGroupLightInformations(input: ICustomDataInput)
    {
        let _item2: MonsterInGroupLightInformations;
        this._playerCountFunc(input);
        let _monstersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _monstersLen; _i2++)
        {
            _item2 = new MonsterInGroupLightInformations();
            _item2.deserialize(input);
            this.monsters.push(_item2);
        }
    }

    private _playerCountFunc(input: ICustomDataInput)
    {
        this.playerCount = input.readInt();
    }

}