import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangeObjectRemovedMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8090;

	public objectUID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectRemovedMessage.protocolId;
    }

    public initExchangeObjectRemovedMessage(remote: boolean = false, objectUID: number = 0): ExchangeObjectRemovedMessage
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
        this.serializeAs_ExchangeObjectRemovedMessage(output);
    }

    public serializeAs_ExchangeObjectRemovedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMessage(output);
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        }
        output.writeVarInt(this.objectUID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectRemovedMessage(input);
    }

    private deserializeAs_ExchangeObjectRemovedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectUIDFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectRemovedMessage.objectUID.");
        }
    }

}