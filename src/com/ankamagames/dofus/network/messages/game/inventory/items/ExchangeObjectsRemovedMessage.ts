import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangeObjectsRemovedMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8928;

	public objectUID: Array<number>;

    public constructor()
    {
        super();
        this.objectUID = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeObjectsRemovedMessage.protocolId;
    }

    public initExchangeObjectsRemovedMessage(remote: boolean = false, objectUID: Array<number> = null): ExchangeObjectsRemovedMessage
    {
        super.initExchangeObjectMessage(remote);
        this.objectUID = objectUID;
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
        this.serializeAs_ExchangeObjectsRemovedMessage(output);
    }

    public serializeAs_ExchangeObjectsRemovedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMessage(output);
        output.writeShort(this.objectUID.length);
        for(var _i1: number = 0; _i1 < this.objectUID.length; _i1++)
        {
            if(this.objectUID[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.objectUID[_i1] + ") on element 1 (starting at 1) of objectUID.");
            }
            output.writeVarInt(this.objectUID[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectsRemovedMessage(input);
    }

    private deserializeAs_ExchangeObjectsRemovedMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        super.deserialize(input);
        let _objectUIDLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectUIDLen; _i1++)
        {
            _val1 = input.readVarUhInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of objectUID.");
            }
            this.objectUID.push(_val1);
        }
    }

}