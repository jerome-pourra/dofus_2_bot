import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9439;

	public sourceType: number = 0;
	public destinationType: number = 0;
	public mapId: number = 0;

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
        this.deserializeAs_TeleportRequestMessage(input);
    }

    private deserializeAs_TeleportRequestMessage(input: ICustomDataInput)
    {
        this._sourceTypeFunc(input);
        this._destinationTypeFunc(input);
        this._mapIdFunc(input);
    }

    private _sourceTypeFunc(input: ICustomDataInput)
    {
        this.sourceType = input.readByte();
        if(this.sourceType < 0)
        {
            throw new Error("Forbidden value (" + this.sourceType + ") on element of TeleportRequestMessage.sourceType.");
        }
    }

    private _destinationTypeFunc(input: ICustomDataInput)
    {
        this.destinationType = input.readByte();
        if(this.destinationType < 0)
        {
            throw new Error("Forbidden value (" + this.destinationType + ") on element of TeleportRequestMessage.destinationType.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of TeleportRequestMessage.mapId.");
        }
    }

}