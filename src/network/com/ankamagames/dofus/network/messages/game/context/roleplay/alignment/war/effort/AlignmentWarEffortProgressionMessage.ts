import { AlignmentWarEffortInformation } from "./../../../../../../../types/game/context/roleplay/alignment/war/effort/AlignmentWarEffortInformation";
import { CustomDataWrapper } from "./../../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../../jerakine/network/NetworkMessage";

export class AlignmentWarEffortProgressionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2045;

	public effortProgressions: Array<AlignmentWarEffortInformation>;

    public constructor()
    {
        super();
        this.effortProgressions = Array<AlignmentWarEffortInformation>();
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