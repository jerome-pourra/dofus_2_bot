import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { TaxCollectorBasicInformations } from "./TaxCollectorBasicInformations";

export class TaxCollectorMovement
{

	public static readonly protocolId: number = 7487;

	public movementType: number = 0;
	public basicInfos: TaxCollectorBasicInformations;
	public playerId: number = 0;
	public playerName: string = "";

    public constructor()
    {
        this.basicInfos = new TaxCollectorBasicInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorMovement(input);
    }

    private deserializeAs_TaxCollectorMovement(input: ICustomDataInput)
    {
        this._movementTypeFunc(input);
        this.basicInfos = new TaxCollectorBasicInformations();
        this.basicInfos.deserialize(input);
        this._playerIdFunc(input);
        this._playerNameFunc(input);
    }

    private _movementTypeFunc(input: ICustomDataInput)
    {
        this.movementType = input.readByte();
        if(this.movementType < 0)
        {
            throw new Error("Forbidden value (" + this.movementType + ") on element of TaxCollectorMovement.movementType.");
        }
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of TaxCollectorMovement.playerId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

}