import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AgressableStatusMessage
{

	public static readonly protocolId: number = 6140;

	public playerId: number = 0;
	public enable: number = 0;
	public roleAvAId: number = 0;
	public pictoScore: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AgressableStatusMessage(input);
    }

    private deserializeAs_AgressableStatusMessage(input: ICustomDataInput)
    {
        this._playerIdFunc(input);
        this._enableFunc(input);
        this._roleAvAIdFunc(input);
        this._pictoScoreFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of AgressableStatusMessage.playerId.");
        }
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readByte();
        if(this.enable < 0)
        {
            throw new Error("Forbidden value (" + this.enable + ") on element of AgressableStatusMessage.enable.");
        }
    }

    private _roleAvAIdFunc(input: ICustomDataInput)
    {
        this.roleAvAId = input.readInt();
    }

    private _pictoScoreFunc(input: ICustomDataInput)
    {
        this.pictoScore = input.readInt();
    }

}