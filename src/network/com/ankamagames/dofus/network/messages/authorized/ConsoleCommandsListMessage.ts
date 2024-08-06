import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ConsoleCommandsListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 869;

	public aliases: Array<string>;
	public args: Array<string>;
	public descriptions: Array<string>;

    public constructor()
    {
        super();
        this.aliases = Array<string>();
        this.args = Array<string>();
        this.descriptions = Array<string>();
    }

    public getMessageId()
    {
        return ConsoleCommandsListMessage.protocolId;
    }

    public initConsoleCommandsListMessage(aliases: Array<string> = null, args: Array<string> = null, descriptions: Array<string> = null): ConsoleCommandsListMessage
    {
        this.aliases = aliases;
        this.args = args;
        this.descriptions = descriptions;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ConsoleCommandsListMessage(output);
    }

    public serializeAs_ConsoleCommandsListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.aliases.length);
        for(var _i1: number = 0; _i1 < this.aliases.length; _i1++)
        {
            output.writeUTF(this.aliases[_i1]);
        }
        output.writeShort(this.args.length);
        for(var _i2: number = 0; _i2 < this.args.length; _i2++)
        {
            output.writeUTF(this.args[_i2]);
        }
        output.writeShort(this.descriptions.length);
        for(var _i3: number = 0; _i3 < this.descriptions.length; _i3++)
        {
            output.writeUTF(this.descriptions[_i3]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ConsoleCommandsListMessage(input);
    }

    private deserializeAs_ConsoleCommandsListMessage(input: ICustomDataInput)
    {
        let _val1: string;
        let _val2: string;
        let _val3: string;
        let _aliasesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _aliasesLen; _i1++)
        {
            _val1 = String(input.readUTF());
            this.aliases.push(_val1);
        }
        let _argsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _argsLen; _i2++)
        {
            _val2 = String(input.readUTF());
            this.args.push(_val2);
        }
        let _descriptionsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _descriptionsLen; _i3++)
        {
            _val3 = String(input.readUTF());
            this.descriptions.push(_val3);
        }
    }

}