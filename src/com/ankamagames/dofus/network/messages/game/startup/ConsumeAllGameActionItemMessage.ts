import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ConsumeAllGameActionItemMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3120;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public characterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ConsumeAllGameActionItemMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ConsumeAllGameActionItemMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ConsumeAllGameActionItemMessage.endpointServer;
    }

    public initConsumeAllGameActionItemMessage(characterId: number = 0): ConsumeAllGameActionItemMessage
    {
        this.characterId = characterId;
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
        this.serializeAs_ConsumeAllGameActionItemMessage(output);
    }

    public serializeAs_ConsumeAllGameActionItemMessage(output: ICustomDataOutput)
    {
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
        }
        output.writeVarLong(this.characterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ConsumeAllGameActionItemMessage(input);
    }

    private deserializeAs_ConsumeAllGameActionItemMessage(input: ICustomDataInput)
    {
        this._characterIdFunc(input);
    }

    private _characterIdFunc(input: ICustomDataInput)
    {
        this.characterId = input.readVarUhLong();
        if(this.characterId < 0 || this.characterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.characterId + ") on element of ConsumeAllGameActionItemMessage.characterId.");
        }
    }

}