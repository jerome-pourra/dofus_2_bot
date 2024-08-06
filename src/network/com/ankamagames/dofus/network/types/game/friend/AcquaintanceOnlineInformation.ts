import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { PlayerStatus } from "./../character/status/PlayerStatus";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AcquaintanceInformation } from "./AcquaintanceInformation";

export class AcquaintanceOnlineInformation extends AcquaintanceInformation implements INetworkType
{

	public static readonly protocolId: number = 251;

	public playerId: number = 0;
	public playerName: string = "";
	public moodSmileyId: number = 0;
	public status: PlayerStatus;

    public constructor()
    {
        super();
        this.status = new PlayerStatus();
    }

    public getTypeId()
    {
        return AcquaintanceOnlineInformation.protocolId;
    }

    public initAcquaintanceOnlineInformation(accountId: number = 0, accountTag: AccountTagInformation = null, playerState: number = 99, playerId: number = 0, playerName: string = "", moodSmileyId: number = 0, status: PlayerStatus = null): AcquaintanceOnlineInformation
    {
        super.initAcquaintanceInformation(accountId,accountTag,playerState);
        this.playerId = playerId;
        this.playerName = playerName;
        this.moodSmileyId = moodSmileyId;
        this.status = status;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AcquaintanceOnlineInformation(output);
    }

    public serializeAs_AcquaintanceOnlineInformation(output: ICustomDataOutput)
    {
        super.serializeAs_AcquaintanceInformation(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
        output.writeUTF(this.playerName);
        if(this.moodSmileyId < 0)
        {
            throw new Error("Forbidden value (" + this.moodSmileyId + ") on element moodSmileyId.");
        }
        output.writeVarShort(this.moodSmileyId);
        output.writeShort(this.status.getTypeId());
        this.status.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AcquaintanceOnlineInformation(input);
    }

    private deserializeAs_AcquaintanceOnlineInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
        this._playerNameFunc(input);
        this._moodSmileyIdFunc(input);
        let _id4: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id4);
        this.status.deserialize(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of AcquaintanceOnlineInformation.playerId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _moodSmileyIdFunc(input: ICustomDataInput)
    {
        this.moodSmileyId = input.readVarUhShort();
        if(this.moodSmileyId < 0)
        {
            throw new Error("Forbidden value (" + this.moodSmileyId + ") on element of AcquaintanceOnlineInformation.moodSmileyId.");
        }
    }

}