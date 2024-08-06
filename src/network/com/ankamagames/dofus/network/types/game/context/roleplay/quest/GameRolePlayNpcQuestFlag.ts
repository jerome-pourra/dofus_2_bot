import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class GameRolePlayNpcQuestFlag implements INetworkType
{

	public static readonly protocolId: number = 6478;

	public questsToValidId: Array<number>;
	public questsToStartId: Array<number>;

    public constructor()
    {
        this.questsToValidId = Array<number>();
        this.questsToStartId = Array<number>();
    }

    public getTypeId()
    {
        return GameRolePlayNpcQuestFlag.protocolId;
    }

    public initGameRolePlayNpcQuestFlag(questsToValidId: Array<number> = null, questsToStartId: Array<number> = null): GameRolePlayNpcQuestFlag
    {
        this.questsToValidId = questsToValidId;
        this.questsToStartId = questsToStartId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayNpcQuestFlag(output);
    }

    public serializeAs_GameRolePlayNpcQuestFlag(output: ICustomDataOutput)
    {
        output.writeShort(this.questsToValidId.length);
        for(var _i1: number = 0; _i1 < this.questsToValidId.length; _i1++)
        {
            if(this.questsToValidId[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.questsToValidId[_i1] + ") on element 1 (starting at 1) of questsToValidId.");
            }
            output.writeVarShort(this.questsToValidId[_i1]);
        }
        output.writeShort(this.questsToStartId.length);
        for(var _i2: number = 0; _i2 < this.questsToStartId.length; _i2++)
        {
            if(this.questsToStartId[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.questsToStartId[_i2] + ") on element 2 (starting at 1) of questsToStartId.");
            }
            output.writeVarShort(this.questsToStartId[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayNpcQuestFlag(input);
    }

    private deserializeAs_GameRolePlayNpcQuestFlag(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _questsToValidIdLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _questsToValidIdLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of questsToValidId.");
            }
            this.questsToValidId.push(_val1);
        }
        let _questsToStartIdLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _questsToStartIdLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of questsToStartId.");
            }
            this.questsToStartId.push(_val2);
        }
    }

}