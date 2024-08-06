import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagPackListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9897;

	public packIds: Array<number>;

    public constructor()
    {
        super();
        this.packIds = Array<number>();
    }

    public getMessageId()
    {
        return HavenBagPackListMessage.protocolId;
    }

    public initHavenBagPackListMessage(packIds: Array<number> = null): HavenBagPackListMessage
    {
        this.packIds = packIds;
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
        this.serializeAs_HavenBagPackListMessage(output);
    }

    public serializeAs_HavenBagPackListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.packIds.length);
        for(var _i1: number = 0; _i1 < this.packIds.length; _i1++)
        {
            output.writeByte(this.packIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HavenBagPackListMessage(input);
    }

    private deserializeAs_HavenBagPackListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _packIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _packIdsLen; _i1++)
        {
            _val1 = input.readByte();
            this.packIds.push(_val1);
        }
    }

}