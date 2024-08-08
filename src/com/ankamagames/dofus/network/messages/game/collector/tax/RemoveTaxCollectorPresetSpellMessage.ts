import { Uuid } from "./../../../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RemoveTaxCollectorPresetSpellMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5781;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public presetId: Uuid;
	public slot: number = 0;

    public constructor()
    {
        super();
        this.presetId = new Uuid();
    }

    public getMessageId()
    {
        return RemoveTaxCollectorPresetSpellMessage.protocolId;
    }

    public isEndpointClient()
    {
        return RemoveTaxCollectorPresetSpellMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return RemoveTaxCollectorPresetSpellMessage.endpointServer;
    }

    public initRemoveTaxCollectorPresetSpellMessage(presetId: Uuid = null, slot: number = 0): RemoveTaxCollectorPresetSpellMessage
    {
        this.presetId = presetId;
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
        this.serializeAs_RemoveTaxCollectorPresetSpellMessage(output);
    }

    public serializeAs_RemoveTaxCollectorPresetSpellMessage(output: ICustomDataOutput)
    {
        this.presetId.serializeAs_Uuid(output);
        if(this.slot < 0)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element slot.");
        }
        output.writeByte(this.slot);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RemoveTaxCollectorPresetSpellMessage(input);
    }

    private deserializeAs_RemoveTaxCollectorPresetSpellMessage(input: ICustomDataInput)
    {
        this.presetId = new Uuid();
        this.presetId.deserialize(input);
        this._slotFunc(input);
    }

    private _slotFunc(input: ICustomDataInput)
    {
        this.slot = input.readByte();
        if(this.slot < 0)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element of RemoveTaxCollectorPresetSpellMessage.slot.");
        }
    }

}