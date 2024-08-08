import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayPlayerLifeStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8693;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public state: number = 0;
	public phenixMapId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayPlayerLifeStatusMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayPlayerLifeStatusMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayPlayerLifeStatusMessage.endpointServer;
    }

    public initGameRolePlayPlayerLifeStatusMessage(state: number = 0, phenixMapId: number = 0): GameRolePlayPlayerLifeStatusMessage
    {
        this.state = state;
        this.phenixMapId = phenixMapId;
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
        this.serializeAs_GameRolePlayPlayerLifeStatusMessage(output);
    }

    public serializeAs_GameRolePlayPlayerLifeStatusMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.state);
        if(this.phenixMapId < 0 || this.phenixMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.phenixMapId + ") on element phenixMapId.");
        }
        output.writeDouble(this.phenixMapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayPlayerLifeStatusMessage(input);
    }

    private deserializeAs_GameRolePlayPlayerLifeStatusMessage(input: ICustomDataInput)
    {
        this._stateFunc(input);
        this._phenixMapIdFunc(input);
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of GameRolePlayPlayerLifeStatusMessage.state.");
        }
    }

    private _phenixMapIdFunc(input: ICustomDataInput)
    {
        this.phenixMapId = input.readDouble();
        if(this.phenixMapId < 0 || this.phenixMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.phenixMapId + ") on element of GameRolePlayPlayerLifeStatusMessage.phenixMapId.");
        }
    }

}