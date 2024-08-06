import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AcquaintanceServerListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8632;

	public servers: Array<number>;

    public constructor()
    {
        super();
        this.servers = Array<number>();
    }

    public getMessageId()
    {
        return AcquaintanceServerListMessage.protocolId;
    }

    public initAcquaintanceServerListMessage(servers: Array<number> = null): AcquaintanceServerListMessage
    {
        this.servers = servers;
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
        this.serializeAs_AcquaintanceServerListMessage(output);
    }

    public serializeAs_AcquaintanceServerListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.servers.length);
        for(var _i1: number = 0; _i1 < this.servers.length; _i1++)
        {
            if(this.servers[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.servers[_i1] + ") on element 1 (starting at 1) of servers.");
            }
            output.writeVarShort(this.servers[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AcquaintanceServerListMessage(input);
    }

    private deserializeAs_AcquaintanceServerListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _serversLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _serversLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of servers.");
            }
            this.servers.push(_val1);
        }
    }

}