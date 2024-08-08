import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightStartingMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6131;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

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

    public getMessageId()
    {
        return GameFightStartingMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightStartingMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightStartingMessage.endpointServer;
    }

    public initGameFightStartingMessage(fightType: number = 0, fightId: number = 0, attackerId: number = 0, defenderId: number = 0, containsBoss: boolean = false, monsters: Array<number> = null): GameFightStartingMessage
    {
        this.fightType = fightType;
        this.fightId = fightId;
        this.attackerId = attackerId;
        this.defenderId = defenderId;
        this.containsBoss = containsBoss;
        this.monsters = monsters;
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
        this.serializeAs_GameFightStartingMessage(output);
    }

    public serializeAs_GameFightStartingMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.fightType);
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        if(this.attackerId < -9007199254740992 || this.attackerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.attackerId + ") on element attackerId.");
        }
        output.writeDouble(this.attackerId);
        if(this.defenderId < -9007199254740992 || this.defenderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.defenderId + ") on element defenderId.");
        }
        output.writeDouble(this.defenderId);
        output.writeBoolean(this.containsBoss);
        output.writeShort(this.monsters.length);
        for(var _i6: number = 0; _i6 < this.monsters.length; _i6++)
        {
            output.writeInt(this.monsters[_i6]);
        }
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