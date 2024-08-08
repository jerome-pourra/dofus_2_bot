import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class StatsUpgradeRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5002;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public useAdditionnal: boolean = false;
	public statId: number = 11;
	public boostPoint: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StatsUpgradeRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StatsUpgradeRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StatsUpgradeRequestMessage.endpointServer;
    }

    public initStatsUpgradeRequestMessage(useAdditionnal: boolean = false, statId: number = 11, boostPoint: number = 0): StatsUpgradeRequestMessage
    {
        this.useAdditionnal = useAdditionnal;
        this.statId = statId;
        this.boostPoint = boostPoint;
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
        this.serializeAs_StatsUpgradeRequestMessage(output);
    }

    public serializeAs_StatsUpgradeRequestMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.useAdditionnal);
        output.writeByte(this.statId);
        if(this.boostPoint < 0)
        {
            throw new Error("Forbidden value (" + this.boostPoint + ") on element boostPoint.");
        }
        output.writeVarShort(this.boostPoint);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatsUpgradeRequestMessage(input);
    }

    private deserializeAs_StatsUpgradeRequestMessage(input: ICustomDataInput)
    {
        this._useAdditionnalFunc(input);
        this._statIdFunc(input);
        this._boostPointFunc(input);
    }

    private _useAdditionnalFunc(input: ICustomDataInput)
    {
        this.useAdditionnal = input.readBoolean();
    }

    private _statIdFunc(input: ICustomDataInput)
    {
        this.statId = input.readByte();
        if(this.statId < 0)
        {
            throw new Error("Forbidden value (" + this.statId + ") on element of StatsUpgradeRequestMessage.statId.");
        }
    }

    private _boostPointFunc(input: ICustomDataInput)
    {
        this.boostPoint = input.readVarUhShort();
        if(this.boostPoint < 0)
        {
            throw new Error("Forbidden value (" + this.boostPoint + ") on element of StatsUpgradeRequestMessage.boostPoint.");
        }
    }

}