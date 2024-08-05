import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class CharacterCapabilitiesMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3451;

	public guildEmblemSymbolCategories: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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