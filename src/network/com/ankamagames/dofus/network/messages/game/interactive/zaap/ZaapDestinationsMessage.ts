import { TeleportDestination } from "./../../../../types/game/interactive/zaap/TeleportDestination";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { TeleportDestinationsMessage } from "./TeleportDestinationsMessage";

export class ZaapDestinationsMessage extends TeleportDestinationsMessage
{

	public static readonly protocolId: number = 9132;

	public spawnMapId: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_ZaapDestinationsMessage(input);
    }

    private deserializeAs_ZaapDestinationsMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._spawnMapIdFunc(input);
    }

    private _spawnMapIdFunc(input: ICustomDataInput)
    {
        this.spawnMapId = input.readDouble();
        if(this.spawnMapId < 0 || this.spawnMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.spawnMapId + ") on element of ZaapDestinationsMessage.spawnMapId.");
        }
    }

}