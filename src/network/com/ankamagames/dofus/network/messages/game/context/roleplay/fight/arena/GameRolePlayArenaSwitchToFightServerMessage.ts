import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaSwitchToFightServerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4751;

	public address: string = "";
	public ports: Array<number>;
	public token: string = "";

    public constructor()
    {
        super();
        this.ports = Array<number>();
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