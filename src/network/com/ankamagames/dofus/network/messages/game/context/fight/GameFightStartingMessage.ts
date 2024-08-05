import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightStartingMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6131;

	public fightType: number = 0;
	public fightId: number = 0;
	public attackerId: number = 0;
	public defenderId: number = 0;
	public containsBoss: boolean = false;
	public monsters: Array<number>;

    public constructor()
    {
        super();
        this.monsters = Array<number>();
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
        this.deserializeAs_GameFightStartingMessage(input);
    }

    private deserializeAs_GameFightStartingMessage(input: ICustomDataInput)
    {
        let _val6: number = 0;
        this._fightTypeFunc(input);
        this._fightIdFunc(input);
        this._attackerIdFunc(input);
        this._defenderIdFunc(input);
        this._containsBossFunc(input);
        let _monstersLen: number = input.readUnsignedShort();
        for(let _i6: number = 0; _i6 < _monstersLen; _i6++)
        {
            _val6 = input.readInt();
            this.monsters.push(_val6);
        }
    }

    private _fightTypeFunc(input: ICustomDataInput)
    {
        this.fightType = input.readByte();
        if(this.fightType < 0)
        {
            throw new Error("Forbidden value (" + this.fightType + ") on element of GameFightStartingMessage.fightType.");
        }
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightStartingMessage.fightId.");
        }
    }

    private _attackerIdFunc(input: ICustomDataInput)
    {
        this.attackerId = input.readDouble();
        if(this.attackerId < -9007199254740992 || this.attackerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.attackerId + ") on element of GameFightStartingMessage.attackerId.");
        }
    }

    private _defenderIdFunc(input: ICustomDataInput)
    {
        this.defenderId = input.readDouble();
        if(this.defenderId < -9007199254740992 || this.defenderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.defenderId + ") on element of GameFightStartingMessage.defenderId.");
        }
    }

    private _containsBossFunc(input: ICustomDataInput)
    {
        this.containsBoss = input.readBoolean();
    }

}