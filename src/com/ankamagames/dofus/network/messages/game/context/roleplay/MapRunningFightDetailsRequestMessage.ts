import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapRunningFightDetailsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 337;

	public fightId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MapRunningFightDetailsRequestMessage.protocolId;
    }

    public initMapRunningFightDetailsRequestMessage(fightId: number = 0): MapRunningFightDetailsRequestMessage
    {
        this.fightId = fightId;
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
        this.serializeAs_MapRunningFightDetailsRequestMessage(output);
    }

    public serializeAs_MapRunningFightDetailsRequestMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapRunningFightDetailsRequestMessage(input);
    }

    private deserializeAs_MapRunningFightDetailsRequestMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of MapRunningFightDetailsRequestMessage.fightId.");
        }
    }

}