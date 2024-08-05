import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementDetailedListRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7960;

	public categoryId: number = 0;

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
        this.deserializeAs_AchievementDetailedListRequestMessage(input);
    }

    private deserializeAs_AchievementDetailedListRequestMessage(input: ICustomDataInput)
    {
        this._categoryIdFunc(input);
    }

    private _categoryIdFunc(input: ICustomDataInput)
    {
        this.categoryId = input.readVarUhShort();
        if(this.categoryId < 0)
        {
            throw new Error("Forbidden value (" + this.categoryId + ") on element of AchievementDetailedListRequestMessage.categoryId.");
        }
    }

}