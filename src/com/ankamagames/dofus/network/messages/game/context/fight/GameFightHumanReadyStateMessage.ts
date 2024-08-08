import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightHumanReadyStateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 109;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public characterId: number = 0;
	public isReady: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightHumanReadyStateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightHumanReadyStateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightHumanReadyStateMessage.endpointServer;
    }

    public initGameFightHumanReadyStateMessage(characterId: number = 0, isReady: boolean = false): GameFightHumanReadyStateMessage
    {
        this.characterId = characterId;
        this.isReady = isReady;
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
        this.serializeAs_GameFightHumanReadyStateMessage(output);
    }

    public serializeAs_GameFightHumanReadyStateMessage(output: ICustomDataOutput)
    {
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
        }
        output.writeVarLong(this.characterId);
        output.writeBoolean(this.isReady);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightHumanReadyStateMessage(input);
    }

    private deserializeAs_GameFightHumanReadyStateMessage(input: ICustomDataInput)
    {
        this._characterIdFunc(input);
        this._isReadyFunc(input);
    }

    private _characterIdFunc(input: ICustomDataInput)
    {
        this.characterId = input.readVarUhLong();
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element of GameFightHumanReadyStateMessage.characterId.");
        }
    }

    private _isReadyFunc(input: ICustomDataInput)
    {
        this.isReady = input.readBoolean();
    }

}