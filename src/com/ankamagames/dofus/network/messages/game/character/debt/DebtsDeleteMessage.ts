import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DebtsDeleteMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7828;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public reason: number = 0;
	public debts: Array<number>;

    public constructor()
    {
        super();
        this.debts = Array<number>();
    }

    public getMessageId()
    {
        return DebtsDeleteMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DebtsDeleteMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DebtsDeleteMessage.endpointServer;
    }

    public initDebtsDeleteMessage(reason: number = 0, debts: Array<number> = null): DebtsDeleteMessage
    {
        this.reason = reason;
        this.debts = debts;
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
        this.serializeAs_DebtsDeleteMessage(output);
    }

    public serializeAs_DebtsDeleteMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
        output.writeShort(this.debts.length);
        for(var _i2: number = 0; _i2 < this.debts.length; _i2++)
        {
            if(this.debts[_i2] < 0 || this.debts[_i2] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.debts[_i2] + ") on element 2 (starting at 1) of debts.");
            }
            output.writeDouble(this.debts[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DebtsDeleteMessage(input);
    }

    private deserializeAs_DebtsDeleteMessage(input: ICustomDataInput)
    {
        let _val2: number = NaN;
        this._reasonFunc(input);
        let _debtsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _debtsLen; _i2++)
        {
            _val2 = Number(input.readDouble());
            if(_val2 < 0 || _val2 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of debts.");
            }
            this.debts.push(_val2);
        }
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of DebtsDeleteMessage.reason.");
        }
    }

}