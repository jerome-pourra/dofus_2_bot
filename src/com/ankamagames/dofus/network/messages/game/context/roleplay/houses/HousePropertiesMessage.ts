import { HouseInstanceInformations } from "./../../../../../types/game/house/HouseInstanceInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HousePropertiesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3385;

	public houseId: number = 0;
	public doorsOnMap: Array<number>;
	public properties: HouseInstanceInformations;

    public constructor()
    {
        super();
        this.doorsOnMap = Array<number>();
        this.properties = new HouseInstanceInformations();
    }

    public getMessageId()
    {
        return HousePropertiesMessage.protocolId;
    }

    public initHousePropertiesMessage(houseId: number = 0, doorsOnMap: Array<number> = null, properties: HouseInstanceInformations = null): HousePropertiesMessage
    {
        this.houseId = houseId;
        this.doorsOnMap = doorsOnMap;
        this.properties = properties;
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
        this.serializeAs_HousePropertiesMessage(output);
    }

    public serializeAs_HousePropertiesMessage(output: ICustomDataOutput)
    {
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
        }
        output.writeVarInt(this.houseId);
        output.writeShort(this.doorsOnMap.length);
        for(var _i2: number = 0; _i2 < this.doorsOnMap.length; _i2++)
        {
            if(this.doorsOnMap[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.doorsOnMap[_i2] + ") on element 2 (starting at 1) of doorsOnMap.");
            }
            output.writeInt(this.doorsOnMap[_i2]);
        }
        output.writeShort(this.properties.getTypeId());
        this.properties.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HousePropertiesMessage(input);
    }

    private deserializeAs_HousePropertiesMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._houseIdFunc(input);
        let _doorsOnMapLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _doorsOnMapLen; _i2++)
        {
            _val2 = input.readInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of doorsOnMap.");
            }
            this.doorsOnMap.push(_val2);
        }
        let _id3: number = input.readUnsignedShort();
        this.properties = ProtocolTypeManager.getInstance(HouseInstanceInformations,_id3);
        this.properties.deserialize(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HousePropertiesMessage.houseId.");
        }
    }

}