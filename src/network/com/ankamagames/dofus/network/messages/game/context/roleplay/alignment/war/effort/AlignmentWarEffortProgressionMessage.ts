import { AlignmentWarEffortInformation } from "./../../../../../../../types/game/context/roleplay/alignment/war/effort/AlignmentWarEffortInformation";
import { CustomDataWrapper } from "./../../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../../jerakine/network/NetworkMessage";

export class AlignmentWarEffortProgressionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2045;

	public effortProgressions: Array<AlignmentWarEffortInformation>;

    public constructor()
    {
        super();
        this.effortProgressions = Array<AlignmentWarEffortInformation>();
    }

    public getMessageId()
    {
        return AlignmentWarEffortProgressionMessage.protocolId;
    }

    public initAlignmentWarEffortProgressionMessage(effortProgressions: Array<AlignmentWarEffortInformation> = null): AlignmentWarEffortProgressionMessage
    {
        this.effortProgressions = effortProgressions;
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
        this.serializeAs_AlignmentWarEffortProgressionMessage(output);
    }

    public serializeAs_AlignmentWarEffortProgressionMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.effortProgressions.length);
        for(var _i1: number = 0; _i1 < this.effortProgressions.length; _i1++)
        {
            (this.effortProgressions[_i1] as AlignmentWarEffortInformation).serializeAs_AlignmentWarEffortInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlignmentWarEffortProgressionMessage(input);
    }

    private deserializeAs_AlignmentWarEffortProgressionMessage(input: ICustomDataInput)
    {
        let _item1: AlignmentWarEffortInformation;
        let _effortProgressionsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _effortProgressionsLen; _i1++)
        {
            _item1 = new AlignmentWarEffortInformation();
            _item1.deserialize(input);
            this.effortProgressions.push(_item1);
        }
    }

}