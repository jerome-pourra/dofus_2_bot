import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayAggressionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6235;

	public attackerId: number = 0;
	public defenderId: number = 0;

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
        this.deserializeAs_GameRolePlayAggressionMessage(input);
    }

    private deserializeAs_GameRolePlayAggressionMessage(input: ICustomDataInput)
    {
        this._attackerIdFunc(input);
        this._defenderIdFunc(input);
    }

    private _attackerIdFunc(input: ICustomDataInput)
    {
        this.attackerId = input.readVarUhLong();
        if(this.attackerId < 0 || this.attackerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.attackerId + ") on element of GameRolePlayAggressionMessage.attackerId.");
        }
    }

    private _defenderIdFunc(input: ICustomDataInput)
    {
        this.defenderId = input.readVarUhLong();
        if(this.defenderId < 0 || this.defenderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.defenderId + ") on element of GameRolePlayAggressionMessage.defenderId.");
        }
    }

}