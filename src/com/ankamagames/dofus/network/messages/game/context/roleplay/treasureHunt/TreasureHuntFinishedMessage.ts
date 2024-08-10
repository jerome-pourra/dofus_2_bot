import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntFinishedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1937;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public questType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TreasureHuntFinishedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TreasureHuntFinishedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TreasureHuntFinishedMessage.endpointServer;
    }

    public initTreasureHuntFinishedMessage(questType: number = 0): TreasureHuntFinishedMessage
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
        this.serializeAs_TreasureHuntFinishedMessage(output);
    }

    public serializeAs_TreasureHuntFinishedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.questType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntFinishedMessage(input);
    }

    private deserializeAs_TreasureHuntFinishedMessage(input: ICustomDataInput)
    {
        this._questTypeFunc(input);
    }

    private _questTypeFunc(input: ICustomDataInput)
    {
        this.questType = input.readByte();
        if(this.questType < 0)
        {
            throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFinishedMessage.questType.");
        }
    }

}