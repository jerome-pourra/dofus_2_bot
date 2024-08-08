import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaRegisterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2855;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public arenaType: number = 3;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayArenaRegisterMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayArenaRegisterMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayArenaRegisterMessage.endpointServer;
    }

    public initGameRolePlayArenaRegisterMessage(arenaType: number = 3): GameRolePlayArenaRegisterMessage
    {
        this.arenaType = arenaType;
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
        this.serializeAs_GameRolePlayArenaRegisterMessage(output);
    }

    public serializeAs_GameRolePlayArenaRegisterMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.arenaType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaRegisterMessage(input);
    }

    private deserializeAs_GameRolePlayArenaRegisterMessage(input: ICustomDataInput)
    {
        this._arenaTypeFunc(input);
    }

    private _arenaTypeFunc(input: ICustomDataInput)
    {
        this.arenaType = input.readInt();
        if(this.arenaType < 0)
        {
            throw new Error("Forbidden value (" + this.arenaType + ") on element of GameRolePlayArenaRegisterMessage.arenaType.");
        }
    }

}