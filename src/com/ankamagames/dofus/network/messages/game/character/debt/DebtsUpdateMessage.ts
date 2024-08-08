import { DebtInformation } from "./../../../../types/game/character/debt/DebtInformation";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DebtsUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8856;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public action: number = 0;
	public debts: Array<DebtInformation>;

    public constructor()
    {
        super();
        this.debts = Array<DebtInformation>();
    }

    public getMessageId()
    {
        return DebtsUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DebtsUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DebtsUpdateMessage.endpointServer;
    }

    public initDebtsUpdateMessage(action: number = 0, debts: Array<DebtInformation> = null): DebtsUpdateMessage
    {
        this.action = action;
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
        this.serializeAs_DebtsUpdateMessage(output);
    }

    public serializeAs_DebtsUpdateMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.action);
        output.writeShort(this.debts.length);
        for(var _i2: number = 0; _i2 < this.debts.length; _i2++)
        {
            output.writeShort((this.debts[_i2] as DebtInformation).getTypeId());
            (this.debts[_i2] as DebtInformation).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DebtsUpdateMessage(input);
    }

    private deserializeAs_DebtsUpdateMessage(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: DebtInformation;
        this._actionFunc(input);
        let _debtsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _debtsLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(DebtInformation,_id2);
            _item2.deserialize(input);
            this.debts.push(_item2);
        }
    }

    private _actionFunc(input: ICustomDataInput)
    {
        this.action = input.readByte();
        if(this.action < 0)
        {
            throw new Error("Forbidden value (" + this.action + ") on element of DebtsUpdateMessage.action.");
        }
    }

}