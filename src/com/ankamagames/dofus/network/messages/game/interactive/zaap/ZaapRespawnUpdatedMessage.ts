import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ZaapRespawnUpdatedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9315;

	public mapId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ZaapRespawnUpdatedMessage.protocolId;
    }

    public initZaapRespawnUpdatedMessage(mapId: number = 0): ZaapRespawnUpdatedMessage
    {
        this.mapId = mapId;
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
        this.serializeAs_ZaapRespawnUpdatedMessage(output);
    }

    public serializeAs_ZaapRespawnUpdatedMessage(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ZaapRespawnUpdatedMessage(input);
    }

    private deserializeAs_ZaapRespawnUpdatedMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of ZaapRespawnUpdatedMessage.mapId.");
        }
    }

}