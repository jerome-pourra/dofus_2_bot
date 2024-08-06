import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class HelloConnectMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5586;

	public salt: string = "";
	public key: Array<number>;

    public constructor()
    {
        super();
        this.key = Array<number>();
    }

    public getMessageId()
    {
        return HelloConnectMessage.protocolId;
    }

    public initHelloConnectMessage(salt: string = "", key: Array<number> = null): HelloConnectMessage
    {
        this.salt = salt;
        this.key = key;
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
        this.serializeAs_HelloConnectMessage(output);
    }

    public serializeAs_HelloConnectMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.salt);
        output.writeVarInt(this.key.length);
        for(var _i2: number = 0; _i2 < this.key.length; _i2++)
        {
            output.writeByte(this.key[_i2]);
        }
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