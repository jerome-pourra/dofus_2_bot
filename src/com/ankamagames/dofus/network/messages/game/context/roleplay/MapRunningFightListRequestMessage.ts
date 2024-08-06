import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapRunningFightListRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1925;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MapRunningFightListRequestMessage.protocolId;
    }

    public initMapRunningFightListRequestMessage(): MapRunningFightListRequestMessage
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
        this.serializeAs_MapRunningFightListRequestMessage(output);
    }

    public serializeAs_MapRunningFightListRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapRunningFightListRequestMessage(input);
    }

    private deserializeAs_MapRunningFightListRequestMessage(input: ICustomDataInput)
    {

    }

}