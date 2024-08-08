import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class TextInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3766;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public msgType: number = 0;
	public msgId: number = 0;
	public parameters: Array<string>;

    public constructor()
    {
        super();
        this.parameters = Array<string>();
    }

    public getMessageId()
    {
        return TextInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TextInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TextInformationMessage.endpointServer;
    }

    public initTextInformationMessage(msgType: number = 0, msgId: number = 0, parameters: Array<string> = null): TextInformationMessage
    {
        this.msgType = msgType;
        this.msgId = msgId;
        this.parameters = parameters;
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
        this.serializeAs_TextInformationMessage(output);
    }

    public serializeAs_TextInformationMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.msgType);
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element msgId.");
        }
        output.writeVarShort(this.msgId);
        output.writeShort(this.parameters.length);
        for(var _i3: number = 0; _i3 < this.parameters.length; _i3++)
        {
            output.writeUTF(this.parameters[_i3]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TextInformationMessage(input);
    }

    private deserializeAs_TextInformationMessage(input: ICustomDataInput)
    {
        let _val3: string;
        this._msgTypeFunc(input);
        this._msgIdFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _parametersLen; _i3++)
        {
            _val3 = String(input.readUTF());
            this.parameters.push(_val3);
        }
    }

    private _msgTypeFunc(input: ICustomDataInput)
    {
        this.msgType = input.readByte();
        if(this.msgType < 0)
        {
            throw new Error("Forbidden value (" + this.msgType + ") on element of TextInformationMessage.msgType.");
        }
    }

    private _msgIdFunc(input: ICustomDataInput)
    {
        this.msgId = input.readVarUhShort();
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element of TextInformationMessage.msgId.");
        }
    }

}