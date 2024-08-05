import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ConsoleCommandsListMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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