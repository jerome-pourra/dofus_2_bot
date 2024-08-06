import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class ActorRestrictionsInformations implements INetworkType
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

    public getTypeId()
    {
        return ActorRestrictionsInformations.protocolId;
    }

    public initActorRestrictionsInformations(cantBeAggressed: boolean = false, cantBeChallenged: boolean = false, cantTrade: boolean = false, cantBeAttackedByMutant: boolean = false, cantRun: boolean = false, forceSlowWalk: boolean = false, cantMinimize: boolean = false, cantMove: boolean = false, cantAggress: boolean = false, cantChallenge: boolean = false, cantExchange: boolean = false, cantAttack: boolean = false, cantChat: boolean = false, cantUseObject: boolean = false, cantUseTaxCollector: boolean = false, cantUseInteractive: boolean = false, cantSpeakToNPC: boolean = false, cantChangeZone: boolean = false, cantAttackMonster: boolean = false): ActorRestrictionsInformations
    {
        this.cantBeAggressed = cantBeAggressed;
        this.cantBeChallenged = cantBeChallenged;
        this.cantTrade = cantTrade;
        this.cantBeAttackedByMutant = cantBeAttackedByMutant;
        this.cantRun = cantRun;
        this.forceSlowWalk = forceSlowWalk;
        this.cantMinimize = cantMinimize;
        this.cantMove = cantMove;
        this.cantAggress = cantAggress;
        this.cantChallenge = cantChallenge;
        this.cantExchange = cantExchange;
        this.cantAttack = cantAttack;
        this.cantChat = cantChat;
        this.cantUseObject = cantUseObject;
        this.cantUseTaxCollector = cantUseTaxCollector;
        this.cantUseInteractive = cantUseInteractive;
        this.cantSpeakToNPC = cantSpeakToNPC;
        this.cantChangeZone = cantChangeZone;
        this.cantAttackMonster = cantAttackMonster;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ActorRestrictionsInformations(output);
    }

    public serializeAs_ActorRestrictionsInformations(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.cantBeAggressed);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.cantBeChallenged);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.cantTrade);
        _box0 = BooleanByteWrapper.setFlag(_box0,3,this.cantBeAttackedByMutant);
        _box0 = BooleanByteWrapper.setFlag(_box0,4,this.cantRun);
        _box0 = BooleanByteWrapper.setFlag(_box0,5,this.forceSlowWalk);
        _box0 = BooleanByteWrapper.setFlag(_box0,6,this.cantMinimize);
        _box0 = BooleanByteWrapper.setFlag(_box0,7,this.cantMove);
        output.writeByte(_box0);
        var _box1: number = 0;
        _box1 = BooleanByteWrapper.setFlag(_box1,0,this.cantAggress);
        _box1 = BooleanByteWrapper.setFlag(_box1,1,this.cantChallenge);
        _box1 = BooleanByteWrapper.setFlag(_box1,2,this.cantExchange);
        _box1 = BooleanByteWrapper.setFlag(_box1,3,this.cantAttack);
        _box1 = BooleanByteWrapper.setFlag(_box1,4,this.cantChat);
        _box1 = BooleanByteWrapper.setFlag(_box1,5,this.cantUseObject);
        _box1 = BooleanByteWrapper.setFlag(_box1,6,this.cantUseTaxCollector);
        _box1 = BooleanByteWrapper.setFlag(_box1,7,this.cantUseInteractive);
        output.writeByte(_box1);
        var _box2: number = 0;
        _box2 = BooleanByteWrapper.setFlag(_box2,0,this.cantSpeakToNPC);
        _box2 = BooleanByteWrapper.setFlag(_box2,1,this.cantChangeZone);
        _box2 = BooleanByteWrapper.setFlag(_box2,2,this.cantAttackMonster);
        output.writeByte(_box2);
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