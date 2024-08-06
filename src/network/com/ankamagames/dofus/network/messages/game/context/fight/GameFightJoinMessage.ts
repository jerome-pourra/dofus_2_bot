import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class GameFightJoinMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return GameFightJoinMessage.protocolId;
    }

    public initGameFightJoinMessage(isTeamPhase: boolean = false, canBeCancelled: boolean = false, canSayReady: boolean = false, isFightStarted: boolean = false, timeMaxBeforeFightStart: number = 0, fightType: number = 0): GameFightJoinMessage
    {
        this.isTeamPhase = isTeamPhase;
        this.canBeCancelled = canBeCancelled;
        this.canSayReady = canSayReady;
        this.isFightStarted = isFightStarted;
        this.timeMaxBeforeFightStart = timeMaxBeforeFightStart;
        this.fightType = fightType;
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
        this.serializeAs_GameFightJoinMessage(output);
    }

    public serializeAs_GameFightJoinMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.isTeamPhase);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.canBeCancelled);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.canSayReady);
        _box0 = BooleanByteWrapper.setFlag(_box0,3,this.isFightStarted);
        output.writeByte(_box0);
        if(this.timeMaxBeforeFightStart < 0)
        {
            throw new Error("Forbidden value (" + this.timeMaxBeforeFightStart + ") on element timeMaxBeforeFightStart.");
        }
        output.writeShort(this.timeMaxBeforeFightStart);
        output.writeByte(this.fightType);
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