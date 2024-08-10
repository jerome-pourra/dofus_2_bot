import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayAttackMonsterRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9329;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public monsterGroupId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayAttackMonsterRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayAttackMonsterRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayAttackMonsterRequestMessage.endpointServer;
    }

    public initGameRolePlayAttackMonsterRequestMessage(monsterGroupId: number = 0): GameRolePlayAttackMonsterRequestMessage
    {
        this.monsterGroupId = monsterGroupId;
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
        this.serializeAs_GameRolePlayAttackMonsterRequestMessage(output);
    }

    public serializeAs_GameRolePlayAttackMonsterRequestMessage(output: ICustomDataOutput)
    {
        if(this.monsterGroupId < -9007199254740992 || this.monsterGroupId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.monsterGroupId + ") on element monsterGroupId.");
        }
        output.writeDouble(this.monsterGroupId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayAttackMonsterRequestMessage(input);
    }

    private deserializeAs_GameRolePlayAttackMonsterRequestMessage(input: ICustomDataInput)
    {
        this._monsterGroupIdFunc(input);
    }

    private _monsterGroupIdFunc(input: ICustomDataInput)
    {
        this.monsterGroupId = input.readDouble();
        if(this.monsterGroupId < -9007199254740992 || this.monsterGroupId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.monsterGroupId + ") on element of GameRolePlayAttackMonsterRequestMessage.monsterGroupId.");
        }
    }

}