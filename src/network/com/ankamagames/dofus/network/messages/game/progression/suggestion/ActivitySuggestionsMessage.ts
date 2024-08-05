import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ActivitySuggestionsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5717;

	public lockedActivitiesIds: Array<number>;
	public unlockedActivitiesIds: Array<number>;

    public constructor()
    {
        super();
        this.lockedActivitiesIds = Array<number>();
        this.unlockedActivitiesIds = Array<number>();
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
        this.deserializeAs_ActivitySuggestionsMessage(input);
    }

    private deserializeAs_ActivitySuggestionsMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _lockedActivitiesIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _lockedActivitiesIdsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of lockedActivitiesIds.");
            }
            this.lockedActivitiesIds.push(_val1);
        }
        let _unlockedActivitiesIdsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _unlockedActivitiesIdsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of unlockedActivitiesIds.");
            }
            this.unlockedActivitiesIds.push(_val2);
        }
    }

}