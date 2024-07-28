import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class ActorRestrictionsInformations
{

	public static readonly protocolId: number = 9953;

	public cantBeAggressed: boolean = false;
	public cantBeChallenged: boolean = false;
	public cantTrade: boolean = false;
	public cantBeAttackedByMutant: boolean = false;
	public cantRun: boolean = false;
	public forceSlowWalk: boolean = false;
	public cantMinimize: boolean = false;
	public cantMove: boolean = false;
	public cantAggress: boolean = false;
	public cantChallenge: boolean = false;
	public cantExchange: boolean = false;
	public cantAttack: boolean = false;
	public cantChat: boolean = false;
	public cantUseObject: boolean = false;
	public cantUseTaxCollector: boolean = false;
	public cantUseInteractive: boolean = false;
	public cantSpeakToNPC: boolean = false;
	public cantChangeZone: boolean = false;
	public cantAttackMonster: boolean = false;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ActorRestrictionsInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.cantBeAggressed = BooleanByteWrapper.getFlag(_box0,0);
        this.cantBeChallenged = BooleanByteWrapper.getFlag(_box0,1);
        this.cantTrade = BooleanByteWrapper.getFlag(_box0,2);
        this.cantBeAttackedByMutant = BooleanByteWrapper.getFlag(_box0,3);
        this.cantRun = BooleanByteWrapper.getFlag(_box0,4);
        this.forceSlowWalk = BooleanByteWrapper.getFlag(_box0,5);
        this.cantMinimize = BooleanByteWrapper.getFlag(_box0,6);
        this.cantMove = BooleanByteWrapper.getFlag(_box0,7);
        let _box1: number = input.readByte();
        this.cantAggress = BooleanByteWrapper.getFlag(_box1,0);
        this.cantChallenge = BooleanByteWrapper.getFlag(_box1,1);
        this.cantExchange = BooleanByteWrapper.getFlag(_box1,2);
        this.cantAttack = BooleanByteWrapper.getFlag(_box1,3);
        this.cantChat = BooleanByteWrapper.getFlag(_box1,4);
        this.cantUseObject = BooleanByteWrapper.getFlag(_box1,5);
        this.cantUseTaxCollector = BooleanByteWrapper.getFlag(_box1,6);
        this.cantUseInteractive = BooleanByteWrapper.getFlag(_box1,7);
        let _box2: number = input.readByte();
        this.cantSpeakToNPC = BooleanByteWrapper.getFlag(_box2,0);
        this.cantChangeZone = BooleanByteWrapper.getFlag(_box2,1);
        this.cantAttackMonster = BooleanByteWrapper.getFlag(_box2,2);
    }

    private deserializeAs_ActorRestrictionsInformations(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
    }

}