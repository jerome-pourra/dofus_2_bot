import { UpdateMountCharacteristic } from "./../../../../types/game/mount/UpdateMountCharacteristic";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class UpdateMountCharacteristicsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1346;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public rideId: number = 0;
	public boostToUpdateList: Array<UpdateMountCharacteristic>;

    public constructor()
    {
        super();
        this.boostToUpdateList = Array<UpdateMountCharacteristic>();
    }

    public getMessageId()
    {
        return UpdateMountCharacteristicsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return UpdateMountCharacteristicsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return UpdateMountCharacteristicsMessage.endpointServer;
    }

    public initUpdateMountCharacteristicsMessage(rideId: number = 0, boostToUpdateList: Array<UpdateMountCharacteristic> = null): UpdateMountCharacteristicsMessage
    {
        this.rideId = rideId;
        this.boostToUpdateList = boostToUpdateList;
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
        this.serializeAs_UpdateMountCharacteristicsMessage(output);
    }

    public serializeAs_UpdateMountCharacteristicsMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.rideId);
        output.writeShort(this.boostToUpdateList.length);
        for(var _i2: number = 0; _i2 < this.boostToUpdateList.length; _i2++)
        {
            output.writeShort((this.boostToUpdateList[_i2] as UpdateMountCharacteristic).getTypeId());
            (this.boostToUpdateList[_i2] as UpdateMountCharacteristic).serialize(output);
        }
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