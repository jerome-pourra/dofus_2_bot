import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class NotificationByServerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3884;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public id: number = 0;
	public parameters: Array<string>;
	public forceOpen: boolean = false;

    public constructor()
    {
        super();
        this.parameters = Array<string>();
    }

    public getMessageId()
    {
        return NotificationByServerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NotificationByServerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NotificationByServerMessage.endpointServer;
    }

    public initNotificationByServerMessage(id: number = 0, parameters: Array<string> = null, forceOpen: boolean = false): NotificationByServerMessage
    {
        this.id = id;
        this.parameters = parameters;
        this.forceOpen = forceOpen;
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
        this.serializeAs_NotificationByServerMessage(output);
    }

    public serializeAs_NotificationByServerMessage(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarShort(this.id);
        output.writeShort(this.parameters.length);
        for(var _i2: number = 0; _i2 < this.parameters.length; _i2++)
        {
            output.writeUTF(this.parameters[_i2]);
        }
        output.writeBoolean(this.forceOpen);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NotificationByServerMessage(input);
    }

    private deserializeAs_NotificationByServerMessage(input: ICustomDataInput)
    {
        let _val2: string;
        this._idFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _parametersLen; _i2++)
        {
            _val2 = String(input.readUTF());
            this.parameters.push(_val2);
        }
        this._forceOpenFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhShort();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of NotificationByServerMessage.id.");
        }
    }

    private _forceOpenFunc(input: ICustomDataInput)
    {
        this.forceOpen = input.readBoolean();
    }

}