import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class CheckFileMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5396;

	public filenameHash: string = "";
	public type: number = 0;
	public value: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CheckFileMessage.protocolId;
    }

    public initCheckFileMessage(filenameHash: string = "", type: number = 0, value: string = ""): CheckFileMessage
    {
        this.filenameHash = filenameHash;
        this.type = type;
        this.value = value;
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
        this.serializeAs_CheckFileMessage(output);
    }

    public serializeAs_CheckFileMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.filenameHash);
        output.writeByte(this.type);
        output.writeUTF(this.value);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CheckFileMessage(input);
    }

    private deserializeAs_CheckFileMessage(input: ICustomDataInput)
    {
        this._filenameHashFunc(input);
        this._typeFunc(input);
        this._valueFunc(input);
    }

    private _filenameHashFunc(input: ICustomDataInput)
    {
        this.filenameHash = input.readUTF();
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of CheckFileMessage.type.");
        }
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readUTF();
    }

}