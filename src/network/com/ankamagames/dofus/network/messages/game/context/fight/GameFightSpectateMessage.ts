import { FightDispellableEffectExtendedInformations } from "./../../../../types/game/action/fight/FightDispellableEffectExtendedInformations";
import { GameActionMark } from "./../../../../types/game/actions/fight/GameActionMark";
import { GameFightEffectTriggerCount } from "./../../../../types/game/context/fight/GameFightEffectTriggerCount";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightSpectateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6318;

	public effects: Array<FightDispellableEffectExtendedInformations>;
	public marks: Array<GameActionMark>;
	public gameTurn: number = 0;
	public fightStart: number = 0;
	public fxTriggerCounts: Array<GameFightEffectTriggerCount>;

    public constructor()
    {
        super();
        this.effects = Array<FightDispellableEffectExtendedInformations>();
        this.marks = Array<GameActionMark>();
        this.fxTriggerCounts = Array<GameFightEffectTriggerCount>();
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
        this.deserializeAs_GameFightSpectateMessage(input);
    }

    private deserializeAs_GameFightSpectateMessage(input: ICustomDataInput)
    {
        let _item1: FightDispellableEffectExtendedInformations;
        let _item2: GameActionMark;
        let _item5: GameFightEffectTriggerCount;
        let _effectsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _effectsLen; _i1++)
        {
            _item1 = new FightDispellableEffectExtendedInformations();
            _item1.deserialize(input);
            this.effects.push(_item1);
        }
        let _marksLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _marksLen; _i2++)
        {
            _item2 = new GameActionMark();
            _item2.deserialize(input);
            this.marks.push(_item2);
        }
        this._gameTurnFunc(input);
        this._fightStartFunc(input);
        let _fxTriggerCountsLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _fxTriggerCountsLen; _i5++)
        {
            _item5 = new GameFightEffectTriggerCount();
            _item5.deserialize(input);
            this.fxTriggerCounts.push(_item5);
        }
    }

    private _gameTurnFunc(input: ICustomDataInput)
    {
        this.gameTurn = input.readVarUhShort();
        if(this.gameTurn < 0)
        {
            throw new Error("Forbidden value (" + this.gameTurn + ") on element of GameFightSpectateMessage.gameTurn.");
        }
    }

    private _fightStartFunc(input: ICustomDataInput)
    {
        this.fightStart = input.readInt();
        if(this.fightStart < 0)
        {
            throw new Error("Forbidden value (" + this.fightStart + ") on element of GameFightSpectateMessage.fightStart.");
        }
    }

}