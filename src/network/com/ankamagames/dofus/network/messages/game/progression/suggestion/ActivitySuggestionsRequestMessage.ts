import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ActivitySuggestionsRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5447;

	public minLevel: number = 0;
	public maxLevel: number = 0;
	public areaId: number = 0;
	public activityCategoryId: number = 0;
	public nbCards: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_ActivitySuggestionsRequestMessage(input);
    }

    private deserializeAs_ActivitySuggestionsRequestMessage(input: ICustomDataInput)
    {
        this._minLevelFunc(input);
        this._maxLevelFunc(input);
        this._areaIdFunc(input);
        this._activityCategoryIdFunc(input);
        this._nbCardsFunc(input);
    }

    private _minLevelFunc(input: ICustomDataInput)
    {
        this.minLevel = input.readVarUhShort();
        if(this.minLevel < 0)
        {
            throw new Error("Forbidden value (" + this.minLevel + ") on element of ActivitySuggestionsRequestMessage.minLevel.");
        }
    }

    private _maxLevelFunc(input: ICustomDataInput)
    {
        this.maxLevel = input.readVarUhShort();
        if(this.maxLevel < 0)
        {
            throw new Error("Forbidden value (" + this.maxLevel + ") on element of ActivitySuggestionsRequestMessage.maxLevel.");
        }
    }

    private _areaIdFunc(input: ICustomDataInput)
    {
        this.areaId = input.readVarUhShort();
        if(this.areaId < 0)
        {
            throw new Error("Forbidden value (" + this.areaId + ") on element of ActivitySuggestionsRequestMessage.areaId.");
        }
    }

    private _activityCategoryIdFunc(input: ICustomDataInput)
    {
        this.activityCategoryId = input.readVarUhShort();
        if(this.activityCategoryId < 0)
        {
            throw new Error("Forbidden value (" + this.activityCategoryId + ") on element of ActivitySuggestionsRequestMessage.activityCategoryId.");
        }
    }

    private _nbCardsFunc(input: ICustomDataInput)
    {
        this.nbCards = input.readUnsignedShort();
        if(this.nbCards < 0 || this.nbCards > 65535)
        {
            throw new Error("Forbidden value (" + this.nbCards + ") on element of ActivitySuggestionsRequestMessage.nbCards.");
        }
    }

}