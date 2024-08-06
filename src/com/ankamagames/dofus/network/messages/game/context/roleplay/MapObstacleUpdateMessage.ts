import { MapObstacle } from "./../../../../types/game/interactive/MapObstacle";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapObstacleUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 75;

	public obstacles: Array<MapObstacle>;

    public constructor()
    {
        super();
        this.obstacles = Array<MapObstacle>();
    }

    public getMessageId()
    {
        return MapObstacleUpdateMessage.protocolId;
    }

    public initMapObstacleUpdateMessage(obstacles: Array<MapObstacle> = null): MapObstacleUpdateMessage
    {
        this.obstacles = obstacles;
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
        this.serializeAs_MapObstacleUpdateMessage(output);
    }

    public serializeAs_MapObstacleUpdateMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.obstacles.length);
        for(var _i1: number = 0; _i1 < this.obstacles.length; _i1++)
        {
            (this.obstacles[_i1] as MapObstacle).serializeAs_MapObstacle(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapObstacleUpdateMessage(input);
    }

    private deserializeAs_MapObstacleUpdateMessage(input: ICustomDataInput)
    {
        let _item1: MapObstacle;
        let _obstaclesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _obstaclesLen; _i1++)
        {
            _item1 = new MapObstacle();
            _item1.deserialize(input);
            this.obstacles.push(_item1);
        }
    }

}