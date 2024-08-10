import { MonsterInGroupLightInformations } from "./../MonsterInGroupLightInformations";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { BreachReward } from "./BreachReward";
import { BreachBranch } from "./BreachBranch";

export class ExtendedBreachBranch extends BreachBranch implements INetworkType
{

	public static readonly protocolId: number = 8307;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public rewards: Array<BreachReward>;
	public modifier: number = 0;
	public prize: number = 0;

    public constructor()
    {
        super();
        this.rewards = Array<BreachReward>();
    }

    public getTypeId()
    {
        return ExtendedBreachBranch.protocolId;
    }

    public isEndpointClient()
    {
        return ExtendedBreachBranch.endpointClient;
    }

    public isEndpointServer()
    {
        return ExtendedBreachBranch.endpointServer;
    }

    public initExtendedBreachBranch(room: number = 0, element: number = 0, bosses: Array<MonsterInGroupLightInformations> = null, map: number = 0, score: number = 0, relativeScore: number = 0, monsters: Array<MonsterInGroupLightInformations> = null, rewards: Array<BreachReward> = null, modifier: number = 0, prize: number = 0): ExtendedBreachBranch
    {
        super.initBreachBranch(room,element,bosses,map,score,relativeScore,monsters);
        this.rewards = rewards;
        this.modifier = modifier;
        this.prize = prize;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExtendedBreachBranch(output);
    }

    public serializeAs_ExtendedBreachBranch(output: ICustomDataOutput)
    {
        super.serializeAs_BreachBranch(output);
        output.writeShort(this.rewards.length);
        for(var _i1: number = 0; _i1 < this.rewards.length; _i1++)
        {
            (this.rewards[_i1] as BreachReward).serializeAs_BreachReward(output);
        }
        output.writeVarInt(this.modifier);
        if(this.prize < 0)
        {
            throw new Error("Forbidden value (" + this.prize + ") on element prize.");
        }
        output.writeVarInt(this.prize);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExtendedBreachBranch(input);
    }

    private deserializeAs_ExtendedBreachBranch(input: ICustomDataInput)
    {
        let _item1: BreachReward;
        super.deserialize(input);
        let _rewardsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _rewardsLen; _i1++)
        {
            _item1 = new BreachReward();
            _item1.deserialize(input);
            this.rewards.push(_item1);
        }
        this._modifierFunc(input);
        this._prizeFunc(input);
    }

    private _modifierFunc(input: ICustomDataInput)
    {
        this.modifier = input.readVarInt();
    }

    private _prizeFunc(input: ICustomDataInput)
    {
        this.prize = input.readVarUhInt();
        if(this.prize < 0)
        {
            throw new Error("Forbidden value (" + this.prize + ") on element of ExtendedBreachBranch.prize.");
        }
    }

}