import { Uuid } from "./../../../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RemoveTaxCollectorPresetSpellMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5781;

	public presetId: Uuid;
	public slot: number = 0;

    public constructor()
    {
        super();
        this.presetId = new Uuid();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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