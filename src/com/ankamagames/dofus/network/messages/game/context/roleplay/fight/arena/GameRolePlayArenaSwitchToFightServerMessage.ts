import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaSwitchToFightServerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4751;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public address: string = "";
	public ports: Array<number>;
	public token: string = "";

    public constructor()
    {
        super();
        this.ports = Array<number>();
    }

    public getMessageId()
    {
        return GameRolePlayArenaSwitchToFightServerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayArenaSwitchToFightServerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayArenaSwitchToFightServerMessage.endpointServer;
    }

    public initGameRolePlayArenaSwitchToFightServerMessage(address: string = "", ports: Array<number> = null, token: string = ""): GameRolePlayArenaSwitchToFightServerMessage
    {
        this.address = address;
        this.ports = ports;
        this.token = token;
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
        this.serializeAs_GameRolePlayArenaSwitchToFightServerMessage(output);
    }

    public serializeAs_GameRolePlayArenaSwitchToFightServerMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.address);
        output.writeShort(this.ports.length);
        for(var _i2: number = 0; _i2 < this.ports.length; _i2++)
        {
            if(this.ports[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.ports[_i2] + ") on element 2 (starting at 1) of ports.");
            }
            output.writeVarShort(this.ports[_i2]);
        }
        output.writeUTF(this.token);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaSwitchToFightServerMessage(input);
    }

    private deserializeAs_GameRolePlayArenaSwitchToFightServerMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._addressFunc(input);
        let _portsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _portsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of ports.");
            }
            this.ports.push(_val2);
        }
        this._tokenFunc(input);
    }

    private _addressFunc(input: ICustomDataInput)
    {
        this.address = input.readUTF();
    }

    private _tokenFunc(input: ICustomDataInput)
    {
        this.token = input.readUTF();
    }

}