import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SlaveNoLongerControledMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1268;

	public masterId: number = 0;
	public slaveId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SlaveNoLongerControledMessage.protocolId;
    }

    public initSlaveNoLongerControledMessage(masterId: number = 0, slaveId: number = 0): SlaveNoLongerControledMessage
    {
        this.masterId = masterId;
        this.slaveId = slaveId;
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
        this.serializeAs_SlaveNoLongerControledMessage(output);
    }

    public serializeAs_SlaveNoLongerControledMessage(output: ICustomDataOutput)
    {
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element masterId.");
        }
        output.writeDouble(this.masterId);
        if(this.slaveId < -9007199254740992 || this.slaveId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.slaveId + ") on element slaveId.");
        }
        output.writeDouble(this.slaveId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SlaveNoLongerControledMessage(input);
    }

    private deserializeAs_SlaveNoLongerControledMessage(input: ICustomDataInput)
    {
        this._masterIdFunc(input);
        this._slaveIdFunc(input);
    }

    private _masterIdFunc(input: ICustomDataInput)
    {
        this.masterId = input.readDouble();
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element of SlaveNoLongerControledMessage.masterId.");
        }
    }

    private _slaveIdFunc(input: ICustomDataInput)
    {
        this.slaveId = input.readDouble();
        if(this.slaveId < -9007199254740992 || this.slaveId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.slaveId + ") on element of SlaveNoLongerControledMessage.slaveId.");
        }
    }

}