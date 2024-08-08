import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { MonsterInGroupLightInformations } from "./MonsterInGroupLightInformations";
import { MonsterInGroupInformations } from "./MonsterInGroupInformations";

export class GroupMonsterStaticInformations implements INetworkType
{

	public static readonly protocolId: number = 5953;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public mainCreatureLightInfos: MonsterInGroupLightInformations;
	public underlings: Array<MonsterInGroupInformations>;

    public constructor()
    {
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.underlings = Array<MonsterInGroupInformations>();
    }

    public getTypeId()
    {
        return GroupMonsterStaticInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GroupMonsterStaticInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GroupMonsterStaticInformations.endpointServer;
    }

    public initGroupMonsterStaticInformations(mainCreatureLightInfos: MonsterInGroupLightInformations = null, underlings: Array<MonsterInGroupInformations> = null): GroupMonsterStaticInformations
    {
        this.mainCreatureLightInfos = mainCreatureLightInfos;
        this.underlings = underlings;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GroupMonsterStaticInformations(output);
    }

    public serializeAs_GroupMonsterStaticInformations(output: ICustomDataOutput)
    {
        this.mainCreatureLightInfos.serializeAs_MonsterInGroupLightInformations(output);
        output.writeShort(this.underlings.length);
        for(var _i2: number = 0; _i2 < this.underlings.length; _i2++)
        {
            (this.underlings[_i2] as MonsterInGroupInformations).serializeAs_MonsterInGroupInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GroupMonsterStaticInformations(input);
    }

    private deserializeAs_GroupMonsterStaticInformations(input: ICustomDataInput)
    {
        let _item2: MonsterInGroupInformations;
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.mainCreatureLightInfos.deserialize(input);
        let _underlingsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _underlingsLen; _i2++)
        {
            _item2 = new MonsterInGroupInformations();
            _item2.deserialize(input);
            this.underlings.push(_item2);
        }
    }

}