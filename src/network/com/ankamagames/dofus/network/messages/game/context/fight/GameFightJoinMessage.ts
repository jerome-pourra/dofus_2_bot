import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class GameFightJoinMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8166;

	public isTeamPhase: boolean = false;
	public canBeCancelled: boolean = false;
	public canSayReady: boolean = false;
	public isFightStarted: boolean = false;
	public timeMaxBeforeFightStart: number = 0;
	public fightType: number = 0;

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
        this.deserializeAs_GameFightJoinMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.isTeamPhase = BooleanByteWrapper.getFlag(_box0,0);
        this.canBeCancelled = BooleanByteWrapper.getFlag(_box0,1);
        this.canSayReady = BooleanByteWrapper.getFlag(_box0,2);
        this.isFightStarted = BooleanByteWrapper.getFlag(_box0,3);
    }

    private deserializeAs_GameFightJoinMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._timeMaxBeforeFightStartFunc(input);
        this._fightTypeFunc(input);
    }

    private _timeMaxBeforeFightStartFunc(input: ICustomDataInput)
    {
        this.timeMaxBeforeFightStart = input.readShort();
        if(this.timeMaxBeforeFightStart < 0)
        {
            throw new Error("Forbidden value (" + this.timeMaxBeforeFightStart + ") on element of GameFightJoinMessage.timeMaxBeforeFightStart.");
        }
    }

    private _fightTypeFunc(input: ICustomDataInput)
    {
        this.fightType = input.readByte();
        if(this.fightType < 0)
        {
            throw new Error("Forbidden value (" + this.fightType + ") on element of GameFightJoinMessage.fightType.");
        }
    }

}