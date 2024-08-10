import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaRegistrationStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4586;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public registered: boolean = false;
	public step: number = 0;
	public battleMode: number = 3;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayArenaRegistrationStatusMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayArenaRegistrationStatusMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayArenaRegistrationStatusMessage.endpointServer;
    }

    public initGameRolePlayArenaRegistrationStatusMessage(registered: boolean = false, step: number = 0, battleMode: number = 3): GameRolePlayArenaRegistrationStatusMessage
    {
        this.registered = registered;
        this.step = step;
        this.battleMode = battleMode;
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
        this.serializeAs_GameRolePlayArenaRegistrationStatusMessage(output);
    }

    public serializeAs_GameRolePlayArenaRegistrationStatusMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.registered);
        output.writeByte(this.step);
        output.writeInt(this.battleMode);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaRegistrationStatusMessage(input);
    }

    private deserializeAs_GameRolePlayArenaRegistrationStatusMessage(input: ICustomDataInput)
    {
        this._registeredFunc(input);
        this._stepFunc(input);
        this._battleModeFunc(input);
    }

    private _registeredFunc(input: ICustomDataInput)
    {
        this.registered = input.readBoolean();
    }

    private _stepFunc(input: ICustomDataInput)
    {
        this.step = input.readByte();
        if(this.step < 0)
        {
            throw new Error("Forbidden value (" + this.step + ") on element of GameRolePlayArenaRegistrationStatusMessage.step.");
        }
    }

    private _battleModeFunc(input: ICustomDataInput)
    {
        this.battleMode = input.readInt();
        if(this.battleMode < 0)
        {
            throw new Error("Forbidden value (" + this.battleMode + ") on element of GameRolePlayArenaRegistrationStatusMessage.battleMode.");
        }
    }

}