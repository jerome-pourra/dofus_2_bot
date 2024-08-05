import { UpdateMountCharacteristic } from "./../../../../types/game/mount/UpdateMountCharacteristic";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class UpdateMountCharacteristicsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1346;

	public rideId: number = 0;
	public boostToUpdateList: Array<UpdateMountCharacteristic>;

    public constructor()
    {
        super();
        this.boostToUpdateList = Array<UpdateMountCharacteristic>();
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
        this.deserializeAs_UpdateMountCharacteristicsMessage(input);
    }

    private deserializeAs_UpdateMountCharacteristicsMessage(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: UpdateMountCharacteristic;
        this._rideIdFunc(input);
        let _boostToUpdateListLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _boostToUpdateListLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(UpdateMountCharacteristic,_id2);
            _item2.deserialize(input);
            this.boostToUpdateList.push(_item2);
        }
    }

    private _rideIdFunc(input: ICustomDataInput)
    {
        this.rideId = input.readVarInt();
    }

}