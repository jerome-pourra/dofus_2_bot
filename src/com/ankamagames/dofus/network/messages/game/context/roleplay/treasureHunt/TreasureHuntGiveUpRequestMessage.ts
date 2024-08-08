import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntGiveUpRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 143;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public questType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TreasureHuntGiveUpRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TreasureHuntGiveUpRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TreasureHuntGiveUpRequestMessage.endpointServer;
    }

    public initTreasureHuntGiveUpRequestMessage(questType: number = 0): TreasureHuntGiveUpRequestMessage
    {
        this.questType = questType;
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
        this.serializeAs_TreasureHuntGiveUpRequestMessage(output);
    }

    public serializeAs_TreasureHuntGiveUpRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.questType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntGiveUpRequestMessage(input);
    }

    private deserializeAs_TreasureHuntGiveUpRequestMessage(input: ICustomDataInput)
    {
        this._questTypeFunc(input);
    }

    private _questTypeFunc(input: ICustomDataInput)
    {
        this.questType = input.readByte();
        if(this.questType < 0)
        {
            throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntGiveUpRequestMessage.questType.");
        }
    }

}