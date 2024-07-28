import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class SelectedServerDataMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4944;

	public serverId: number = 0;
	public address: string = "";
	public ports: Array<number>;
	public canCreateNewCharacter: boolean = false;
	public ticket: Array<number>;

    public constructor()
    {
        super();
        this.ports = Array<number>();
        this.ticket = Array<number>();
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
        this.deserializeAs_SelectedServerDataMessage(input);
    }

    private deserializeAs_SelectedServerDataMessage(input: ICustomDataInput)
    {
        let _val3: number = 0;
        let _val5: number = 0;
        this._serverIdFunc(input);
        this._addressFunc(input);
        let _portsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _portsLen; _i3++)
        {
            _val3 = input.readVarUhShort();
            if(_val3 < 0)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of ports.");
            }
            this.ports.push(_val3);
        }
        this._canCreateNewCharacterFunc(input);
        let _ticketLen: number = input.readVarInt();
        for(let _i5: number = 0; _i5 < _ticketLen; _i5++)
        {
            _val5 = input.readByte();
            this.ticket.push(_val5);
        }
    }

    private _serverIdFunc(input: ICustomDataInput)
    {
        this.serverId = input.readVarUhShort();
        if(this.serverId < 0)
        {
            throw new Error("Forbidden value (" + this.serverId + ") on element of SelectedServerDataMessage.serverId.");
        }
    }

    private _addressFunc(input: ICustomDataInput)
    {
        this.address = input.readUTF();
    }

    private _canCreateNewCharacterFunc(input: ICustomDataInput)
    {
        this.canCreateNewCharacter = input.readBoolean();
    }

}