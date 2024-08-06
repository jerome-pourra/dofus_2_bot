import { MapNpcQuestInfo } from "./../../../../../types/game/context/roleplay/npc/MapNpcQuestInfo";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ListMapNpcsQuestStatusUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5023;

	public mapInfo: Array<MapNpcQuestInfo>;

    public constructor()
    {
        super();
        this.mapInfo = Array<MapNpcQuestInfo>();
    }

    public getMessageId()
    {
        return ListMapNpcsQuestStatusUpdateMessage.protocolId;
    }

    public initListMapNpcsQuestStatusUpdateMessage(mapInfo: Array<MapNpcQuestInfo> = null): ListMapNpcsQuestStatusUpdateMessage
    {
        this.mapInfo = mapInfo;
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
        this.serializeAs_ListMapNpcsQuestStatusUpdateMessage(output);
    }

    public serializeAs_ListMapNpcsQuestStatusUpdateMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.mapInfo.length);
        for(var _i1: number = 0; _i1 < this.mapInfo.length; _i1++)
        {
            (this.mapInfo[_i1] as MapNpcQuestInfo).serializeAs_MapNpcQuestInfo(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ListMapNpcsQuestStatusUpdateMessage(input);
    }

    private deserializeAs_ListMapNpcsQuestStatusUpdateMessage(input: ICustomDataInput)
    {
        let _item1: MapNpcQuestInfo;
        let _mapInfoLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _mapInfoLen; _i1++)
        {
            _item1 = new MapNpcQuestInfo();
            _item1.deserialize(input);
            this.mapInfo.push(_item1);
        }
    }

}