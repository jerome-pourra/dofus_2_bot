import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ActivitySuggestionsMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return ActivitySuggestionsMessage.protocolId;
    }

    public initActivitySuggestionsMessage(lockedActivitiesIds: Array<number> = null, unlockedActivitiesIds: Array<number> = null): ActivitySuggestionsMessage
    {
        this.lockedActivitiesIds = lockedActivitiesIds;
        this.unlockedActivitiesIds = unlockedActivitiesIds;
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
        this.serializeAs_ActivitySuggestionsMessage(output);
    }

    public serializeAs_ActivitySuggestionsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.lockedActivitiesIds.length);
        for(var _i1: number = 0; _i1 < this.lockedActivitiesIds.length; _i1++)
        {
            if(this.lockedActivitiesIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.lockedActivitiesIds[_i1] + ") on element 1 (starting at 1) of lockedActivitiesIds.");
            }
            output.writeVarShort(this.lockedActivitiesIds[_i1]);
        }
        output.writeShort(this.unlockedActivitiesIds.length);
        for(var _i2: number = 0; _i2 < this.unlockedActivitiesIds.length; _i2++)
        {
            if(this.unlockedActivitiesIds[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.unlockedActivitiesIds[_i2] + ") on element 2 (starting at 1) of unlockedActivitiesIds.");
            }
            output.writeVarShort(this.unlockedActivitiesIds[_i2]);
        }
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