import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaFightPropositionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5667;

	public fightId: number = 0;
	public alliesId: Array<number>;
	public duration: number = 0;

    public constructor()
    {
        super();
        this.alliesId = Array<number>();
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
        this.deserializeAs_GameRolePlayArenaFightPropositionMessage(input);
    }

    private deserializeAs_GameRolePlayArenaFightPropositionMessage(input: ICustomDataInput)
    {
        let _val2: number = NaN;
        this._fightIdFunc(input);
        let _alliesIdLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _alliesIdLen; _i2++)
        {
            _val2 = Number(input.readDouble());
            if(_val2 < -9007199254740992 || _val2 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of alliesId.");
            }
            this.alliesId.push(_val2);
        }
        this._durationFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameRolePlayArenaFightPropositionMessage.fightId.");
        }
    }

    private _durationFunc(input: ICustomDataInput)
    {
        this.duration = input.readVarUhShort();
        if(this.duration < 0)
        {
            throw new Error("Forbidden value (" + this.duration + ") on element of GameRolePlayArenaFightPropositionMessage.duration.");
        }
    }

}