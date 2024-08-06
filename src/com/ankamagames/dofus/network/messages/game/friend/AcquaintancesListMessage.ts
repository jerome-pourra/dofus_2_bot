import { AcquaintanceInformation } from "./../../../types/game/friend/AcquaintanceInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AcquaintancesListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5647;

	public acquaintanceList: Array<AcquaintanceInformation>;

    public constructor()
    {
        super();
        this.acquaintanceList = Array<AcquaintanceInformation>();
    }

    public getMessageId()
    {
        return AcquaintancesListMessage.protocolId;
    }

    public initAcquaintancesListMessage(acquaintanceList: Array<AcquaintanceInformation> = null): AcquaintancesListMessage
    {
        this.acquaintanceList = acquaintanceList;
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
        this.serializeAs_AcquaintancesListMessage(output);
    }

    public serializeAs_AcquaintancesListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.acquaintanceList.length);
        for(var _i1: number = 0; _i1 < this.acquaintanceList.length; _i1++)
        {
            output.writeShort((this.acquaintanceList[_i1] as AcquaintanceInformation).getTypeId());
            (this.acquaintanceList[_i1] as AcquaintanceInformation).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AcquaintancesListMessage(input);
    }

    private deserializeAs_AcquaintancesListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: AcquaintanceInformation;
        let _acquaintanceListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _acquaintanceListLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(AcquaintanceInformation,_id1);
            _item1.deserialize(input);
            this.acquaintanceList.push(_item1);
        }
    }

}