import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class CheckFileRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5970;

	public filename: string = "";
	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CheckFileRequestMessage.protocolId;
    }

    public initCheckFileRequestMessage(filename: string = "", type: number = 0): CheckFileRequestMessage
    {
        this.filename = filename;
        this.type = type;
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
        this.serializeAs_CheckFileRequestMessage(output);
    }

    public serializeAs_CheckFileRequestMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.filename);
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CheckFileRequestMessage(input);
    }

    private deserializeAs_CheckFileRequestMessage(input: ICustomDataInput)
    {
        this._filenameFunc(input);
        this._typeFunc(input);
    }

    private _filenameFunc(input: ICustomDataInput)
    {
        this.filename = input.readUTF();
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of CheckFileRequestMessage.type.");
        }
    }

}