import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceFactsErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4210;

	public allianceId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceFactsErrorMessage.protocolId;
    }

    public initAllianceFactsErrorMessage(allianceId: number = 0): AllianceFactsErrorMessage
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
        this.serializeAs_AllianceFactsErrorMessage(output);
    }

    public serializeAs_AllianceFactsErrorMessage(output: ICustomDataOutput)
    {
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
        }
        output.writeVarInt(this.allianceId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceFactsErrorMessage(input);
    }

    private deserializeAs_AllianceFactsErrorMessage(input: ICustomDataInput)
    {
        this._allianceIdFunc(input);
    }

    private _allianceIdFunc(input: ICustomDataInput)
    {
        this.allianceId = input.readVarUhInt();
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element of AllianceFactsErrorMessage.allianceId.");
        }
    }

}