import { HouseInstanceInformations } from "./../../../../../types/game/house/HouseInstanceInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HousePropertiesMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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