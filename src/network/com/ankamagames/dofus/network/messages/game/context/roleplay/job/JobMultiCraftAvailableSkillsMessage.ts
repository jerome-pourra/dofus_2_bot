import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { JobAllowMultiCraftRequestMessage } from "./JobAllowMultiCraftRequestMessage";

export class JobMultiCraftAvailableSkillsMessage extends JobAllowMultiCraftRequestMessage
{

	public static readonly protocolId: number = 8902;

	public playerId: number = 0;
	public skills: Array<number>;

    public constructor()
    {
        super();
        this.skills = Array<number>();
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
        this.deserializeAs_JobMultiCraftAvailableSkillsMessage(input);
    }

    private deserializeAs_JobMultiCraftAvailableSkillsMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        super.deserialize(input);
        this._playerIdFunc(input);
        let _skillsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _skillsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of skills.");
            }
            this.skills.push(_val2);
        }
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of JobMultiCraftAvailableSkillsMessage.playerId.");
        }
    }

}