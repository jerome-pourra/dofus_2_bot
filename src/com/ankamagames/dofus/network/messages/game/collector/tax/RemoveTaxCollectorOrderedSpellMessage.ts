import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RemoveTaxCollectorOrderedSpellMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9951;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public taxCollectorId: number = 0;
	public slot: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return RemoveTaxCollectorOrderedSpellMessage.protocolId;
    }

    public isEndpointClient()
    {
        return RemoveTaxCollectorOrderedSpellMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return RemoveTaxCollectorOrderedSpellMessage.endpointServer;
    }

    public initRemoveTaxCollectorOrderedSpellMessage(taxCollectorId: number = 0, slot: number = 0): RemoveTaxCollectorOrderedSpellMessage
    {
        this.taxCollectorId = taxCollectorId;
        this.slot = slot;
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
        this.serializeAs_RemoveTaxCollectorOrderedSpellMessage(output);
    }

    public serializeAs_RemoveTaxCollectorOrderedSpellMessage(output: ICustomDataOutput)
    {
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element taxCollectorId.");
        }
        output.writeDouble(this.taxCollectorId);
        if(this.slot < 0)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element slot.");
        }
        output.writeByte(this.slot);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RemoveTaxCollectorOrderedSpellMessage(input);
    }

    private deserializeAs_RemoveTaxCollectorOrderedSpellMessage(input: ICustomDataInput)
    {
        this._taxCollectorIdFunc(input);
        this._slotFunc(input);
    }

    private _taxCollectorIdFunc(input: ICustomDataInput)
    {
        this.taxCollectorId = input.readDouble();
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element of RemoveTaxCollectorOrderedSpellMessage.taxCollectorId.");
        }
    }

    private _slotFunc(input: ICustomDataInput)
    {
        this.slot = input.readByte();
        if(this.slot < 0)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element of RemoveTaxCollectorOrderedSpellMessage.slot.");
        }
    }

}