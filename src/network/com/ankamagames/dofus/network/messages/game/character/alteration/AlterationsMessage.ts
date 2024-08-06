import { AlterationInfo } from "./../../../../types/game/character/alteration/AlterationInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AlterationsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7721;

	public alterations: Array<AlterationInfo>;

    public constructor()
    {
        super();
        this.alterations = Array<AlterationInfo>();
    }

    public getMessageId()
    {
        return AlterationsMessage.protocolId;
    }

    public initAlterationsMessage(alterations: Array<AlterationInfo> = null): AlterationsMessage
    {
        this.alterations = alterations;
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
        this.serializeAs_AlterationsMessage(output);
    }

    public serializeAs_AlterationsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.alterations.length);
        for(var _i1: number = 0; _i1 < this.alterations.length; _i1++)
        {
            (this.alterations[_i1] as AlterationInfo).serializeAs_AlterationInfo(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlterationsMessage(input);
    }

    private deserializeAs_AlterationsMessage(input: ICustomDataInput)
    {
        let _item1: AlterationInfo;
        let _alterationsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _alterationsLen; _i1++)
        {
            _item1 = new AlterationInfo();
            _item1.deserialize(input);
            this.alterations.push(_item1);
        }
    }

}