import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceFactsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 593;

	public allianceId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceFactsRequestMessage.protocolId;
    }

    public initAllianceFactsRequestMessage(allianceId: number = 0): AllianceFactsRequestMessage
    {
        this.allianceId = allianceId;
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
        this.serializeAs_AllianceFactsRequestMessage(output);
    }

    public serializeAs_AllianceFactsRequestMessage(output: ICustomDataOutput)
    {
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
        }
        output.writeVarInt(this.allianceId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceFactsRequestMessage(input);
    }

    private deserializeAs_AllianceFactsRequestMessage(input: ICustomDataInput)
    {
        this._allianceIdFunc(input);
    }

    private _allianceIdFunc(input: ICustomDataInput)
    {
        this.allianceId = input.readVarUhInt();
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element of AllianceFactsRequestMessage.allianceId.");
        }
    }

}