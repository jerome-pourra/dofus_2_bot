import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayDelayedActionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4358;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public delayedCharacterId: number = 0;
	public delayTypeId: number = 0;
	public delayEndTime: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayDelayedActionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayDelayedActionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayDelayedActionMessage.endpointServer;
    }

    public initGameRolePlayDelayedActionMessage(delayedCharacterId: number = 0, delayTypeId: number = 0, delayEndTime: number = 0): GameRolePlayDelayedActionMessage
    {
        this.delayedCharacterId = delayedCharacterId;
        this.delayTypeId = delayTypeId;
        this.delayEndTime = delayEndTime;
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
        this.serializeAs_GameRolePlayDelayedActionMessage(output);
    }

    public serializeAs_GameRolePlayDelayedActionMessage(output: ICustomDataOutput)
    {
        if(this.delayedCharacterId < -9007199254740992 || this.delayedCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.delayedCharacterId + ") on element delayedCharacterId.");
        }
        output.writeDouble(this.delayedCharacterId);
        output.writeByte(this.delayTypeId);
        if(this.delayEndTime < 0 || this.delayEndTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.delayEndTime + ") on element delayEndTime.");
        }
        output.writeDouble(this.delayEndTime);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayDelayedActionMessage(input);
    }

    private deserializeAs_GameRolePlayDelayedActionMessage(input: ICustomDataInput)
    {
        this._delayedCharacterIdFunc(input);
        this._delayTypeIdFunc(input);
        this._delayEndTimeFunc(input);
    }

    private _delayedCharacterIdFunc(input: ICustomDataInput)
    {
        this.delayedCharacterId = input.readDouble();
        if(this.delayedCharacterId < -9007199254740992 || this.delayedCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.delayedCharacterId + ") on element of GameRolePlayDelayedActionMessage.delayedCharacterId.");
        }
    }

    private _delayTypeIdFunc(input: ICustomDataInput)
    {
        this.delayTypeId = input.readByte();
        if(this.delayTypeId < 0)
        {
            throw new Error("Forbidden value (" + this.delayTypeId + ") on element of GameRolePlayDelayedActionMessage.delayTypeId.");
        }
    }

    private _delayEndTimeFunc(input: ICustomDataInput)
    {
        this.delayEndTime = input.readDouble();
        if(this.delayEndTime < 0 || this.delayEndTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.delayEndTime + ") on element of GameRolePlayDelayedActionMessage.delayEndTime.");
        }
    }

}