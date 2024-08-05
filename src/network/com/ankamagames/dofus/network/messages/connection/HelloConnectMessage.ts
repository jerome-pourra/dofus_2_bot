import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class HelloConnectMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5586;

	public salt: string = "";
	public key: Array<number>;

    public constructor()
    {
        super();
        this.key = Array<number>();
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
        this.deserializeAs_HelloConnectMessage(input);
    }

    private deserializeAs_HelloConnectMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._saltFunc(input);
        let _keyLen: number = input.readVarInt();
        for(let _i2: number = 0; _i2 < _keyLen; _i2++)
        {
            _val2 = input.readByte();
            this.key.push(_val2);
        }
    }

    private _saltFunc(input: ICustomDataInput)
    {
        this.salt = input.readUTF();
    }

}