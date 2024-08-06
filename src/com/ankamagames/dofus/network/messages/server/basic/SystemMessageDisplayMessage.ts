import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SystemMessageDisplayMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5943;

	public hangUp: boolean = false;
	public msgId: number = 0;
	public parameters: Array<string>;

    public constructor()
    {
        super();
        this.parameters = Array<string>();
    }

    public getMessageId()
    {
        return SystemMessageDisplayMessage.protocolId;
    }

    public initSystemMessageDisplayMessage(hangUp: boolean = false, msgId: number = 0, parameters: Array<string> = null): SystemMessageDisplayMessage
    {
        this.hangUp = hangUp;
        this.msgId = msgId;
        this.parameters = parameters;
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
        this.serializeAs_SystemMessageDisplayMessage(output);
    }

    public serializeAs_SystemMessageDisplayMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.hangUp);
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
        this.deserializeAs_SystemMessageDisplayMessage(input);
    }

    private deserializeAs_SystemMessageDisplayMessage(input: ICustomDataInput)
    {
        let _val3: string;
        this._hangUpFunc(input);
        this._msgIdFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _parametersLen; _i3++)
        {
            _val3 = String(input.readUTF());
            this.parameters.push(_val3);
        }
    }

    private _hangUpFunc(input: ICustomDataInput)
    {
        this.hangUp = input.readBoolean();
    }

    private _msgIdFunc(input: ICustomDataInput)
    {
        this.msgId = input.readVarUhShort();
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element of SystemMessageDisplayMessage.msgId.");
        }
    }

}