import { MapCoordinates } from "./../../../../types/game/context/MapCoordinates";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CompassUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 872;

	public type: number = 0;
	public coords: MapCoordinates;

    public constructor()
    {
        super();
        this.coords = new MapCoordinates();
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
        this.deserializeAs_CompassUpdateMessage(input);
    }

    private deserializeAs_CompassUpdateMessage(input: ICustomDataInput)
    {
        this._typeFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.coords = ProtocolTypeManager.getInstance(MapCoordinates,_id2);
        this.coords.deserialize(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of CompassUpdateMessage.type.");
        }
    }

}