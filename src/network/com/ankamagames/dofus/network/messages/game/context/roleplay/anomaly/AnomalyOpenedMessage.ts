import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class AnomalyOpenedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1124;

	public subAreaId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AnomalyOpenedMessage.protocolId;
    }

    public initAnomalyOpenedMessage(subAreaId: number = 0): AnomalyOpenedMessage
    {
        this.subAreaId = subAreaId;
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
        this.serializeAs_AnomalyOpenedMessage(output);
    }

    public serializeAs_AnomalyOpenedMessage(output: ICustomDataOutput)
    {
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AnomalyOpenedMessage(input);
    }

    private deserializeAs_AnomalyOpenedMessage(input: ICustomDataInput)
    {
        this._subAreaIdFunc(input);
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of AnomalyOpenedMessage.subAreaId.");
        }
    }

}