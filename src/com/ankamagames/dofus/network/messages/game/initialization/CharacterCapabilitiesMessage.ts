import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class CharacterCapabilitiesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3451;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public guildEmblemSymbolCategories: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterCapabilitiesMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterCapabilitiesMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterCapabilitiesMessage.endpointServer;
    }

    public initCharacterCapabilitiesMessage(guildEmblemSymbolCategories: number = 0): CharacterCapabilitiesMessage
    {
        this.guildEmblemSymbolCategories = guildEmblemSymbolCategories;
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
        this.serializeAs_CharacterCapabilitiesMessage(output);
    }

    public serializeAs_CharacterCapabilitiesMessage(output: ICustomDataOutput)
    {
        if(this.guildEmblemSymbolCategories < 0)
        {
            throw new Error("Forbidden value (" + this.guildEmblemSymbolCategories + ") on element guildEmblemSymbolCategories.");
        }
        output.writeVarInt(this.guildEmblemSymbolCategories);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCapabilitiesMessage(input);
    }

    private deserializeAs_CharacterCapabilitiesMessage(input: ICustomDataInput)
    {
        this._guildEmblemSymbolCategoriesFunc(input);
    }

    private _guildEmblemSymbolCategoriesFunc(input: ICustomDataInput)
    {
        this.guildEmblemSymbolCategories = input.readVarUhInt();
        if(this.guildEmblemSymbolCategories < 0)
        {
            throw new Error("Forbidden value (" + this.guildEmblemSymbolCategories + ") on element of CharacterCapabilitiesMessage.guildEmblemSymbolCategories.");
        }
    }

}