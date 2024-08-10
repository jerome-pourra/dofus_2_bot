import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { TreasureHuntDigRequestAnswerMessage } from "./TreasureHuntDigRequestAnswerMessage";

export class TreasureHuntDigRequestAnswerFailedMessage extends TreasureHuntDigRequestAnswerMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2459;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public wrongFlagCount: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TreasureHuntDigRequestAnswerFailedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TreasureHuntDigRequestAnswerFailedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TreasureHuntDigRequestAnswerFailedMessage.endpointServer;
    }

    public initTreasureHuntDigRequestAnswerFailedMessage(questType: number = 0, result: number = 0, wrongFlagCount: number = 0): TreasureHuntDigRequestAnswerFailedMessage
    {
        super.initTreasureHuntDigRequestAnswerMessage(questType,result);
        this.wrongFlagCount = wrongFlagCount;
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
        this.serializeAs_TreasureHuntDigRequestAnswerFailedMessage(output);
    }

    public serializeAs_TreasureHuntDigRequestAnswerFailedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_TreasureHuntDigRequestAnswerMessage(output);
        if(this.wrongFlagCount < 0)
        {
            throw new Error("Forbidden value (" + this.wrongFlagCount + ") on element wrongFlagCount.");
        }
        output.writeByte(this.wrongFlagCount);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(input);
    }

    private deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._wrongFlagCountFunc(input);
    }

    private _wrongFlagCountFunc(input: ICustomDataInput)
    {
        this.wrongFlagCount = input.readByte();
        if(this.wrongFlagCount < 0)
        {
            throw new Error("Forbidden value (" + this.wrongFlagCount + ") on element of TreasureHuntDigRequestAnswerFailedMessage.wrongFlagCount.");
        }
    }

}