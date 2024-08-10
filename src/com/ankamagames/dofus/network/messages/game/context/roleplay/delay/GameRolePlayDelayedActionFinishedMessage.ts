import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayDelayedActionFinishedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7896;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public delayedCharacterId: number = 0;
	public delayTypeId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayDelayedActionFinishedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayDelayedActionFinishedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayDelayedActionFinishedMessage.endpointServer;
    }

    public initGameRolePlayDelayedActionFinishedMessage(delayedCharacterId: number = 0, delayTypeId: number = 0): GameRolePlayDelayedActionFinishedMessage
    {
        this.delayedCharacterId = delayedCharacterId;
        this.delayTypeId = delayTypeId;
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
        this.serializeAs_GameRolePlayDelayedActionFinishedMessage(output);
    }

    public serializeAs_GameRolePlayDelayedActionFinishedMessage(output: ICustomDataOutput)
    {
        if(this.delayedCharacterId < -9007199254740992 || this.delayedCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.delayedCharacterId + ") on element delayedCharacterId.");
        }
        output.writeDouble(this.delayedCharacterId);
        output.writeByte(this.delayTypeId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayDelayedActionFinishedMessage(input);
    }

    private deserializeAs_GameRolePlayDelayedActionFinishedMessage(input: ICustomDataInput)
    {
        this._delayedCharacterIdFunc(input);
        this._delayTypeIdFunc(input);
    }

    private _delayedCharacterIdFunc(input: ICustomDataInput)
    {
        this.delayedCharacterId = input.readDouble();
        if(this.delayedCharacterId < -9007199254740992 || this.delayedCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.delayedCharacterId + ") on element of GameRolePlayDelayedActionFinishedMessage.delayedCharacterId.");
        }
    }

    private _delayTypeIdFunc(input: ICustomDataInput)
    {
        this.delayTypeId = input.readByte();
        if(this.delayTypeId < 0)
        {
            throw new Error("Forbidden value (" + this.delayTypeId + ") on element of GameRolePlayDelayedActionFinishedMessage.delayTypeId.");
        }
    }

}