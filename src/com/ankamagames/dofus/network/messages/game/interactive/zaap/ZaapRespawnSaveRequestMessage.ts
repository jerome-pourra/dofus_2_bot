import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ZaapRespawnSaveRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3373;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ZaapRespawnSaveRequestMessage.protocolId;
    }

    public initZaapRespawnSaveRequestMessage(): ZaapRespawnSaveRequestMessage
    {
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
        this.serializeAs_ZaapRespawnSaveRequestMessage(output);
    }

    public serializeAs_ZaapRespawnSaveRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ZaapRespawnSaveRequestMessage(input);
    }

    private deserializeAs_ZaapRespawnSaveRequestMessage(input: ICustomDataInput)
    {

    }

}