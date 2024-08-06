import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeTypesExchangerDescriptionForUserMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6572;

	public objectType: number = 0;
	public typeDescription: Array<number>;

    public constructor()
    {
        super();
        this.typeDescription = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeTypesExchangerDescriptionForUserMessage.protocolId;
    }

    public initExchangeTypesExchangerDescriptionForUserMessage(objectType: number = 0, typeDescription: Array<number> = null): ExchangeTypesExchangerDescriptionForUserMessage
    {
        this.objectType = objectType;
        this.typeDescription = typeDescription;
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
        this.serializeAs_ExchangeTypesExchangerDescriptionForUserMessage(output);
    }

    public serializeAs_ExchangeTypesExchangerDescriptionForUserMessage(output: ICustomDataOutput)
    {
        if(this.objectType < 0)
        {
            throw new Error("Forbidden value (" + this.objectType + ") on element objectType.");
        }
        output.writeInt(this.objectType);
        output.writeShort(this.typeDescription.length);
        for(var _i2: number = 0; _i2 < this.typeDescription.length; _i2++)
        {
            if(this.typeDescription[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.typeDescription[_i2] + ") on element 2 (starting at 1) of typeDescription.");
            }
            output.writeVarInt(this.typeDescription[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeTypesExchangerDescriptionForUserMessage(input);
    }

    private deserializeAs_ExchangeTypesExchangerDescriptionForUserMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._objectTypeFunc(input);
        let _typeDescriptionLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _typeDescriptionLen; _i2++)
        {
            _val2 = input.readVarUhInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of typeDescription.");
            }
            this.typeDescription.push(_val2);
        }
    }

    private _objectTypeFunc(input: ICustomDataInput)
    {
        this.objectType = input.readInt();
        if(this.objectType < 0)
        {
            throw new Error("Forbidden value (" + this.objectType + ") on element of ExchangeTypesExchangerDescriptionForUserMessage.objectType.");
        }
    }

}