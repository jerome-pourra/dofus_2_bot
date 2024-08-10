import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachCharactersMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6556;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public characters: Array<number>;

    public constructor()
    {
        super();
        this.characters = Array<number>();
    }

    public getMessageId()
    {
        return BreachCharactersMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachCharactersMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachCharactersMessage.endpointServer;
    }

    public initBreachCharactersMessage(characters: Array<number> = null): BreachCharactersMessage
    {
        this.characters = characters;
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
        this.serializeAs_BreachCharactersMessage(output);
    }

    public serializeAs_BreachCharactersMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.characters.length);
        for(var _i1: number = 0; _i1 < this.characters.length; _i1++)
        {
            if(this.characters[_i1] < 0 || this.characters[_i1] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.characters[_i1] + ") on element 1 (starting at 1) of characters.");
            }
            output.writeVarLong(this.characters[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachCharactersMessage(input);
    }

    private deserializeAs_BreachCharactersMessage(input: ICustomDataInput)
    {
        let _val1: number = NaN;
        let _charactersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _charactersLen; _i1++)
        {
            _val1 = input.readVarUhLong();
            if(_val1 < 0 || _val1 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of characters.");
            }
            this.characters.push(_val1);
        }
    }

}