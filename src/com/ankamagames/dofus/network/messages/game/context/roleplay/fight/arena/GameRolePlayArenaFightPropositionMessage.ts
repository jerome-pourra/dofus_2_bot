import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaFightPropositionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5667;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public fightId: number = 0;
	public alliesId: Array<number>;
	public duration: number = 0;

    public constructor()
    {
        super();
        this.alliesId = Array<number>();
    }

    public getMessageId()
    {
        return GameRolePlayArenaFightPropositionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayArenaFightPropositionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayArenaFightPropositionMessage.endpointServer;
    }

    public initGameRolePlayArenaFightPropositionMessage(fightId: number = 0, alliesId: Array<number> = null, duration: number = 0): GameRolePlayArenaFightPropositionMessage
    {
        this.fightId = fightId;
        this.alliesId = alliesId;
        this.duration = duration;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayArenaFightPropositionMessage(output);
    }

    public serializeAs_GameRolePlayArenaFightPropositionMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        output.writeShort(this.alliesId.length);
        for(var _i2: number = 0; _i2 < this.alliesId.length; _i2++)
        {
            if(this.alliesId[_i2] < -9007199254740992 || this.alliesId[_i2] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.alliesId[_i2] + ") on element 2 (starting at 1) of alliesId.");
            }
            output.writeDouble(this.alliesId[_i2]);
        }
        if(this.duration < 0)
        {
            throw new Error("Forbidden value (" + this.duration + ") on element duration.");
        }
        output.writeVarShort(this.duration);
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