import { IgnoredInformations } from "./../../../types/game/friend/IgnoredInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class IgnoredListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8123;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public ignoredList: Array<IgnoredInformations>;

    public constructor()
    {
        super();
        this.ignoredList = Array<IgnoredInformations>();
    }

    public getMessageId()
    {
        return IgnoredListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return IgnoredListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return IgnoredListMessage.endpointServer;
    }

    public initIgnoredListMessage(ignoredList: Array<IgnoredInformations> = null): IgnoredListMessage
    {
        this.ignoredList = ignoredList;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_IgnoredListMessage(output);
    }

    public serializeAs_IgnoredListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.ignoredList.length);
        for(var _i1: number = 0; _i1 < this.ignoredList.length; _i1++)
        {
            output.writeShort((this.ignoredList[_i1] as IgnoredInformations).getTypeId());
            (this.ignoredList[_i1] as IgnoredInformations).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IgnoredListMessage(input);
    }

    private deserializeAs_IgnoredListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: IgnoredInformations;
        let _ignoredListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _ignoredListLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(IgnoredInformations,_id1);
            _item1.deserialize(input);
            this.ignoredList.push(_item1);
        }
    }

}