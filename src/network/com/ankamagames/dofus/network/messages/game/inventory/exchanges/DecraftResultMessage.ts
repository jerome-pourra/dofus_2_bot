import { DecraftedItemStackInfo } from "./../../../../types/game/context/roleplay/job/DecraftedItemStackInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DecraftResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3985;

	public results: Array<DecraftedItemStackInfo>;

    public constructor()
    {
        super();
        this.results = Array<DecraftedItemStackInfo>();
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
        this.deserializeAs_DecraftResultMessage(input);
    }

    private deserializeAs_DecraftResultMessage(input: ICustomDataInput)
    {
        let _item1: DecraftedItemStackInfo;
        let _resultsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _resultsLen; _i1++)
        {
            _item1 = new DecraftedItemStackInfo();
            _item1.deserialize(input);
            this.results.push(_item1);
        }
    }

}