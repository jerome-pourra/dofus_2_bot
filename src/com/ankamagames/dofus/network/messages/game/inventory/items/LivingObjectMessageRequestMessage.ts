import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class LivingObjectMessageRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5726;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public msgId: number = 0;
	public parameters: Array<string>;
	public livingObject: number = 0;

    public constructor()
    {
        super();
        this.parameters = Array<string>();
    }

    public getMessageId()
    {
        return LivingObjectMessageRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return LivingObjectMessageRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return LivingObjectMessageRequestMessage.endpointServer;
    }

    public initLivingObjectMessageRequestMessage(msgId: number = 0, parameters: Array<string> = null, livingObject: number = 0): LivingObjectMessageRequestMessage
    {
        this.msgId = msgId;
        this.parameters = parameters;
        this.livingObject = livingObject;
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
        this.serializeAs_LivingObjectMessageRequestMessage(output);
    }

    public serializeAs_LivingObjectMessageRequestMessage(output: ICustomDataOutput)
    {
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element msgId.");
        }
        output.writeVarShort(this.msgId);
        output.writeShort(this.parameters.length);
        for(var _i2: number = 0; _i2 < this.parameters.length; _i2++)
        {
            output.writeUTF(this.parameters[_i2]);
        }
        if(this.livingObject < 0)
        {
            throw new Error("Forbidden value (" + this.livingObject + ") on element livingObject.");
        }
        output.writeVarInt(this.livingObject);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LivingObjectMessageRequestMessage(input);
    }

    private deserializeAs_LivingObjectMessageRequestMessage(input: ICustomDataInput)
    {
        let _val2: string;
        this._msgIdFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _parametersLen; _i2++)
        {
            _val2 = String(input.readUTF());
            this.parameters.push(_val2);
        }
        this._livingObjectFunc(input);
    }

    private _msgIdFunc(input: ICustomDataInput)
    {
        this.msgId = input.readVarUhShort();
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element of LivingObjectMessageRequestMessage.msgId.");
        }
    }

    private _livingObjectFunc(input: ICustomDataInput)
    {
        this.livingObject = input.readVarUhInt();
        if(this.livingObject < 0)
        {
            throw new Error("Forbidden value (" + this.livingObject + ") on element of LivingObjectMessageRequestMessage.livingObject.");
        }
    }

}