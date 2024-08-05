import { TreasureHuntFlag } from "./../../../../../types/game/context/roleplay/treasureHunt/TreasureHuntFlag";
import { TreasureHuntStep } from "./../../../../../types/game/context/roleplay/treasureHunt/TreasureHuntStep";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7235;

	public questType: number = 0;
	public startMapId: number = 0;
	public knownStepsList: Array<TreasureHuntStep>;
	public totalStepCount: number = 0;
	public checkPointCurrent: number = 0;
	public checkPointTotal: number = 0;
	public availableRetryCount: number = 0;
	public flags: Array<TreasureHuntFlag>;

    public constructor()
    {
        super();
        this.knownStepsList = Array<TreasureHuntStep>();
        this.flags = Array<TreasureHuntFlag>();
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
        this.deserializeAs_TreasureHuntMessage(input);
    }

    private deserializeAs_TreasureHuntMessage(input: ICustomDataInput)
    {
        let _id3: number = 0;
        let _item3: TreasureHuntStep;
        let _item8: TreasureHuntFlag;
        this._questTypeFunc(input);
        this._startMapIdFunc(input);
        let _knownStepsListLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _knownStepsListLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(TreasureHuntStep,_id3);
            _item3.deserialize(input);
            this.knownStepsList.push(_item3);
        }
        this._totalStepCountFunc(input);
        this._checkPointCurrentFunc(input);
        this._checkPointTotalFunc(input);
        this._availableRetryCountFunc(input);
        let _flagsLen: number = input.readUnsignedShort();
        for(let _i8: number = 0; _i8 < _flagsLen; _i8++)
        {
            _item8 = new TreasureHuntFlag();
            _item8.deserialize(input);
            this.flags.push(_item8);
        }
    }

    private _questTypeFunc(input: ICustomDataInput)
    {
        this.questType = input.readByte();
        if(this.questType < 0)
        {
            throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntMessage.questType.");
        }
    }

    private _startMapIdFunc(input: ICustomDataInput)
    {
        this.startMapId = input.readDouble();
        if(this.startMapId < 0 || this.startMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.startMapId + ") on element of TreasureHuntMessage.startMapId.");
        }
    }

    private _totalStepCountFunc(input: ICustomDataInput)
    {
        this.totalStepCount = input.readByte();
        if(this.totalStepCount < 0)
        {
            throw new Error("Forbidden value (" + this.totalStepCount + ") on element of TreasureHuntMessage.totalStepCount.");
        }
    }

    private _checkPointCurrentFunc(input: ICustomDataInput)
    {
        this.checkPointCurrent = input.readVarUhInt();
        if(this.checkPointCurrent < 0)
        {
            throw new Error("Forbidden value (" + this.checkPointCurrent + ") on element of TreasureHuntMessage.checkPointCurrent.");
        }
    }

    private _checkPointTotalFunc(input: ICustomDataInput)
    {
        this.checkPointTotal = input.readVarUhInt();
        if(this.checkPointTotal < 0)
        {
            throw new Error("Forbidden value (" + this.checkPointTotal + ") on element of TreasureHuntMessage.checkPointTotal.");
        }
    }

    private _availableRetryCountFunc(input: ICustomDataInput)
    {
        this.availableRetryCount = input.readInt();
    }

}