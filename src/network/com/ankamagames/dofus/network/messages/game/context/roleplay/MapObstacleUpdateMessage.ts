import { MapObstacle } from "./../../../../types/game/interactive/MapObstacle";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapObstacleUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 75;

	public obstacles: Array<MapObstacle>;

    public constructor()
    {
        super();
        this.obstacles = Array<MapObstacle>();
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