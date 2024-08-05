import { TeleportDestination } from "./../../../../types/game/interactive/zaap/TeleportDestination";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportDestinationsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7615;

	public type: number = 0;
	public destinations: Array<TeleportDestination>;

    public constructor()
    {
        super();
        this.destinations = Array<TeleportDestination>();
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
        this.deserializeAs_TeleportDestinationsMessage(input);
    }

    private deserializeAs_TeleportDestinationsMessage(input: ICustomDataInput)
    {
        let _item2: TeleportDestination;
        this._typeFunc(input);
        let _destinationsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _destinationsLen; _i2++)
        {
            _item2 = new TeleportDestination();
            _item2.deserialize(input);
            this.destinations.push(_item2);
        }
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of TeleportDestinationsMessage.type.");
        }
    }

}