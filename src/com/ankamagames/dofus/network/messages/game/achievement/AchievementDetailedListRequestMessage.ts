import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementDetailedListRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7960;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public categoryId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AchievementDetailedListRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AchievementDetailedListRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AchievementDetailedListRequestMessage.endpointServer;
    }

    public initAchievementDetailedListRequestMessage(categoryId: number = 0): AchievementDetailedListRequestMessage
    {
        this.categoryId = categoryId;
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
        this.serializeAs_AchievementDetailedListRequestMessage(output);
    }

    public serializeAs_AchievementDetailedListRequestMessage(output: ICustomDataOutput)
    {
        if(this.categoryId < 0)
        {
            throw new Error("Forbidden value (" + this.categoryId + ") on element categoryId.");
        }
        output.writeVarShort(this.categoryId);
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